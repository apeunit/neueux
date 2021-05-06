import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React from "react";
import AppView from "components/app/View";
import HeaderView from "components/app/HeaderView";
import ScreenView from "components/app/screen/View";
import { getAppContent, listAllAppContent } from "lib/app";
import { getScreenContent, getAllAppScreenContent } from "lib/screen";
import Filter from "components/filter";
import { filteredTagsByApp } from "lib/tags";
import { filteredUserflowsByApp } from "lib/userflows";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import AppFormExtended, { FormProps } from "forms/appExtended";

import { useRouter } from "next/router";

const App = ({
  appData,
  attributes,
  screens,
  screen,
  screenNavigation,
  tags,
  userflows,
  preview,
  file,
  slug,
}) => {
  const formOptions = AppFormExtended(slug, attributes);

  // Registers a JSON Tina Form
  const [formData, form] = useGithubJsonForm(file || {}, formOptions);
  usePlugin(form);

  const app = () => {
    if (preview) {
      return formData;
    }
    return appData;
  };

  if (screen && !preview) {
    return (
      <Layout
        title={`${app().name} - Screen view`}
        description={app().description}
        fill
      >
        <ScreenView
          key={screen.id}
          screen={screen}
          app={app()}
          navigation={screenNavigation}
        />
      </Layout>
    );
  }

  const router = useRouter();

  const filtered = () => {
    if (preview) return app().screens;

    let userflows: any = router.query.userflows;
    let tags: any = router.query.tags;

    if (userflows && !Array.isArray(userflows)) {
      userflows = [userflows];
    }

    if (tags && !Array.isArray(tags)) {
      tags = [tags];
    }

    return screens.filter(
      (it) =>
        (!userflows && !tags) ||
        (userflows && userflows.some((u) => it.userflows?.some((userflow) => userflow.id == u))) ||
        (tags && tags.some((t) => it.tags?.some((tag) => tag.id == t)))
    );
  };

  return (
    <Layout
      title={`${app().name} - App`}
      description={app().description}
      backButton
      editable
    >
      <main className="w-11/12 mx-auto">
        <HeaderView app={app()} />
        <Filter
          tags={tags}
          userflows={userflows}
          routeParams={{
            slug: app().slug,
          }}
          routePathname={null}
          fallbackRoutePathname={null}
        />
        <AppView app={app()} screens={filtered()} preview={preview} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
  previewData,
}) => {
  const slug = params.slug[0];
  const tags = filteredTagsByApp(params.slug[0]);
  const userflows = filteredUserflowsByApp(params.slug[0]);

  if (preview) {
    return {
      props: {
        ...(await FormProps({ previewData, slug })),
        tags,
        userflows,
        appData: {},
        slug,
      },
    };
  }

  const app = getAppContent(params.slug[0]);

  const screens = getAllAppScreenContent(app.slug);
  const screen = params.slug[2] ? getScreenContent(params.slug[2]) : null;
  const screenNavigation = { prev: null, next: null };

  if (screen) {
    const screenIndex = screens.map((s) => s.id).indexOf(screen.id);
    screenNavigation.prev =
      screenIndex > 0
        ? `/apps/${app.slug}/screen/${screens[screenIndex - 1].id}`
        : null;
    screenNavigation.next =
      screenIndex < screens.length - 1
        ? `/apps/${app.slug}/screen/${screens[screenIndex + 1].id}`
        : null;
  }

  return {
    props: {
      appData: app,
      screens,
      screen: screen,
      screenNavigation,
      tags,
      userflows,
      preview: preview || false,
      attributes: {},
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apps = listAllAppContent();
  const paths = [];
  apps.forEach((app) => {
    const screens = getAllAppScreenContent(app.slug);
    paths.push({
      params: {
        slug: [app.slug],
      },
    });
    screens.forEach((screen) => {
      paths.push({
        params: {
          slug: [app.slug, "screen", screen.id],
        },
      });
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export default App;
