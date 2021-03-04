import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import React from "react";
import Screen from "../../components/card/Screen.js";
import HeaderView from "../../components/sections/HeaderView";
import ScreenView from "../../components/sections/ScreenView";
import { getAppContent, listAllAppContent } from "../../lib/app";
import { getAllAppScreenContent, getScreenContent } from "../../lib/screen";
import Link from "next/link";
import Filter from "../../components/sections/Filter";
import { filteredTagsByApp } from "../../lib/tags";
import { filteredUserflowsByApp } from "../../lib/userflows";

import { useRouter } from "next/router";

const App = ({ app, screens, screen, screenNavigation, tags, userflows }) => {
  if (screen) {
    return (
      <ScreenView screen={screen} app={app} navigation={screenNavigation} />
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
        (userflows &&
          userflows.some((u) =>
            it.userflows.some((userflow) => userflow.slug == u)
          )) ||
        (tags && tags.some((t) => it.tags.some((tag) => tag.slug == t)))
    );
  };

  return (
    <Layout title={app.name}>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <Filter
          tags={tags}
          userflows={userflows}
          routeParams={{
            slug: app.slug,
          }}
        />
        <div
          className={[
            "mt-5 grid  gap-5",
            app.device === "mobile" ? "xl:grid-cols-6 grid-cols-2" : "grid-cols-2",
          ].join(" ")}
        >
          {filtered().map((screen) => {
            return (
              <Link
                key={`screen-card-${screen.slug}`}
                href={`/apps/${app.slug}/screen/${screen.slug}`}
              >
                <a>
                  <Screen url={screen.image} style={app.type} />
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const app = getAppContent(params.slug[0]);
  const screens = getAllAppScreenContent(params.slug[0]);
  const screen = params.slug[2] ? getScreenContent(params.slug[2]) : null;
  const screenNavigation = { prev: null, next: null };

  const tags = filteredTagsByApp(params.slug[0]);
  const userflows = filteredUserflowsByApp(params.slug[0]);

  if (screen) {
    const screenIndex = screens.map((s) => s.slug).indexOf(screen.slug);
    screenNavigation.prev =
      screenIndex > 0
        ? `${app.slug}/screen/${screens[screenIndex - 1].slug}`
        : null;
    screenNavigation.next =
      screenIndex < screens.length - 1
        ? `${app.slug}/screen/${screens[screenIndex + 1].slug}`
        : null;
  }

  return {
    props: {
      app,
      screens,
      screen,
      screenNavigation,
      tags,
      userflows,
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
          slug: [app.slug, "screen", screen.slug],
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
