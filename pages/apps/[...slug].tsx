import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React from "react";
import Screen from "components/app/screen/Card";
import HeaderView from "components/app/HeaderView";
import ScreenView from "components/app/screen/View";
import { getAppContent, listAllAppContent } from "lib/app";
import { getScreenContent, getAllAppScreenContent } from "lib/screen";
import Link from "next/link";
import Filter from "components/filter";
import { filteredTagsByApp } from "lib/tags";
import { filteredUserflowsByApp } from "lib/userflows";
import Button from "components/Button";

import { useRouter } from "next/router";

const App = ({ app, screens, screen, screenNavigation, tags, userflows, preview }) => {

  if (screen) {
    return (
      <ScreenView
        key={screen.slug}
        screen={screen}
        app={app}
        navigation={screenNavigation}
      />
    );
  }

  const router = useRouter();

  const filtered = () => {
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
        (userflows && userflows.some((u) => it.userflow === u)) ||
        (tags && tags.some((t) => it.tags.some((tag) => tag.slug == t)))
    );
  };

  return (
    <Layout title={`${app.name} - App`} backButton>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <Filter
          tags={tags}
          userflows={userflows}
          routeParams={{
            slug: app.slug,
          }}
          routePathname={null}
          fallbackRoutePathname={null}
        />
        <div
          className={[
            "mt-5 grid  gap-5",
            app.device === "mobile"
              ? "lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-1/4 grid-cols-2"
              : "lg:grid-cols-2 grid-cols-1 md:grid-cols-1 sm:grid-cols-1",
          ].join(" ")}
        >
          {filtered().map((screen) => {
            return (
              <Link
                key={`screen-card-${screen.id}`}
                href={`/apps/${app.slug}/screen/${screen.id}`}
              >
                <a className="lg:mb-5 mb-0">
                  <Screen url={screen.image} style={app.device} />
                </a>
              </Link>
            );
          })}
        </div>
      </main>
      {preview && (
        <div className="fixed right-5 bottom-5 inline-block">
          <Link href={`/editor/apps/${app.slug}`}>
            <a>
              <Button type="primary" size="lg">
                Edit app
              </Button>
            </a>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const app = getAppContent(params.slug[0]);
  const screens = getAllAppScreenContent(app.slug);
  const screen = params.slug[2] ? getScreenContent(params.slug[2]) : null;
  const screenNavigation = { prev: null, next: null };

  const tags = filteredTagsByApp(params.slug[0]);
  const userflows = filteredUserflowsByApp(params.slug[0]);

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
      app,
      screens,
      screen: screen,
      screenNavigation,
      tags,
      userflows,
      preview: preview || false,
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
