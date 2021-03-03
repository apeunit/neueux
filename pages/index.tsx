import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import React from "react";
import AppCard from "../components/card/App";
import Header from "../components/sections/Header";
import { listAppContent } from "../lib/app";
import { useRouter } from "next/router";

import { listTags } from "../lib/tags";
import { listUserflows } from "../lib/userflows";
import Filter from "../components/sections/Filter";
// import { listTags } from "lib/tags";

const IndexPage = ({ apps, filter }) => {
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
            it.screens.some((screen) =>
              screen.userflows.some((userflow) => userflow.slug == u)
            )
          )) ||
        (tags &&
          tags.some((t) =>
            it.screens.some((screen) =>
              screen.tags.some((tag) => tag.slug == t)
            )
          ))
    );
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto">
        <Header title="Screen gallery" />
        <Filter
          tags={filter.tags}
          userflows={filter.userflows}
          routeParams={null}
        />
        {filtered().map((app) => {
          return <AppCard key={`app-list-${app.slug}`} app={app} />;
        })}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apps = listAppContent(1, 30);
  const tags = listTags();
  const userflows = listUserflows();
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

export default IndexPage;
