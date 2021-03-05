import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import AppCard from "components/card/App";
import Header from "components/sections/Header";
import { listAppContent } from "lib/app";
import { useRouter } from "next/router";

import { filteredTagsAll } from "lib/tags";
import { filteredUserflowsAll } from "lib/userflows";
import Filter from "components/sections/Filter";

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
          routeParams={{}}
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
  const tags = filteredTagsAll(1, 30);
  const userflows =  filteredUserflowsAll(1, 30);
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
