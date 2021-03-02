import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import React, { useState } from "react";
import AppCard from "../components/card/App";
import Header from "../components/sections/Header";
import { listAppContent } from "../lib/app";

import { listTags } from "../lib/tags";
import { listUserflows } from "../lib/userflows";
import Filter from "../components/sections/Filter";
// import { listTags } from "lib/tags";

const IndexPage = ({ apps, tags, userflows }) => {
  console.log(userflows);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto">
        <Header title="Screen gallery" />
        <Filter tags={tags} userflows={userflows} />
        {apps.map((app) => {
          return <AppCard app={app} />;
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
      userflows,
      tags,
    },
  };
};

export default IndexPage;
