import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import React from "react";
import AppCard from "../components/card/App";
import Header from "../components/sections/Header";
import { listAppContent } from "../lib/app";
import { listTags } from "lib/tags";

const IndexPage = ({apps}) => {
  console.log(apps);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto">
        <Header title="Screen gallery" />
        {apps.map((app) => {
          return <AppCard app={app} />;
        })}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apps = listAppContent(1, 30);
  const pagination = {
    current: 1,
    pages: 1,
  };
  return {
    props: {
      apps,
      pagination,
    },
  };
};

export default IndexPage;
