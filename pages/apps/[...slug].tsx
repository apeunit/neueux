import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import React, { useState } from "react";
import Screen from "../../components/card/Screen.js";
import HeaderView from "../../components/sections/HeaderView";
import ScreenView from "../../components/sections/ScreenView";
import { getAppContent, listAllAppContent } from "../../lib/app";
import { getAllAppScreenContent, getScreenContent } from "../../lib/screen";
import Link from "next/link";
import Filter from "../../components/sections/Filter";
import { listTags } from "../../lib/tags";
import { listUserflows } from "../../lib/userflows";

const App = ({ app, screens, screen, screenNavigation, tags, userflows }) => {
  const [showFilter, setShowFilter] = useState(false);

  if (screen) {
    return (
      <ScreenView screen={screen} app={app} navigation={screenNavigation} />
    );
  }
  return (
    <Layout title={app.name}>
      <main className="w-11/12 mx-auto">
        {showFilter && (
          <Filter
            tags={tags}
            userflows={userflows}
            onClose={() => setShowFilter(false)}
          />
        )}
        <HeaderView app={app} onOpenFilter={() => setShowFilter(true)} />
        <div
          className={[
            "mt-7 grid  gap-5",
            app.device === "mobile" ? "grid-cols-6" : "grid-cols-2",
          ].join(" ")}
        >
          {screens.map((screen) => {
            return (
              <Link href={`/apps/${app.slug}/screen/${screen.slug}`}>
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

  const tags = listTags();
  const userflows = listUserflows();


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
      userflows
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
