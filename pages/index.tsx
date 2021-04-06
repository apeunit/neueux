import { GetStaticProps } from "next";
import Layout from "components/Layout";
import React from "react";
import AppCard from "components/app/Card";
import Header from "components/Header";
import { listAppContent } from "lib/app";

import { filteredTagsAll } from "lib/tags";
import { filteredUserflowsAll } from "lib/userflows";
import Filter from "components/filter";


const IndexPage = ({ apps, filter }) => {

  return (
   <Layout title="Home | Next.js + TypeScript Example">
    
      <main className="w-11/12 mx-auto xl:relative">
        <Header title="Screen gallery" />
        <Filter
          tags={filter.tags}
          userflows={filter.userflows}
          routeParams={null}
          routePathname={'/filter'}
          fallbackRoutePathname={'/'}
        />
        {apps.map((app) => {
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
