import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import Header from "components/sections/Header";
import { listAppContent } from "lib/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { filteredTagsAll } from "lib/tags";
import { filteredUserflowsAll } from "lib/userflows";
import Filter from "components/sections/Filter";
import ScreenCard from "components/card/Screen";

const FilterPage = ({ apps, filter }) => {
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

    return apps.filter(
      (it) =>
        (!userflows && !tags) ||
        (userflows &&
          userflows.some((u) =>
            it.userflows.some((userflow) => userflow == u)
          )) ||
        (tags && tags.some((t) => it.tags.some((tag) => tag == t)))
    );
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto xl:relative">
        <Header title="Screen gallery" />
        <Filter
          tags={filter.tags}
          userflows={filter.userflows}
          routeParams={null}
          routePathname={null}
          fallbackRoutePathname={'/'}
        />
        <div className="mt-5 flex">
          {filtered().map((app) => {
            return (
              <div
                key={`screen-card-view-${app.screens[0].slug}`}
                className={[
                  app.type === "desktop" ? "w-3/6" : "w-1/6",
                  "ml-3",
                ].join(" ")}
              >
                <Link href={`/apps/${app.slug}/screen/${app.screens[0].slug}`}>
                  <a>
                    <ScreenCard url={app.screens[0].image} style={app.type} />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apps = listAppContent(1, 30);
  const tags = filteredTagsAll(1, 30);
  const userflows = filteredUserflowsAll(1, 30);
  const pagination = {
    current: 1,
    pages: 1,
  };
  return {
    props: {
      apps,
      pagination,
      filter: {
        tags,
        userflows,
      },
    },
  };
};

export default FilterPage;
