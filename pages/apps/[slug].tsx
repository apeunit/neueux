import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/Layout";
import React from "react";
import Screen from "../../components/card/Screen.js";
import HeaderView from "../../components/sections/HeaderView";
import { getAppContent, listAllAppContent } from "../../lib/app";
import { listAppScreenContent } from "../../lib/screen";

const App = ({ app, screens }) => {
  console.log(screens);
  return (
    <Layout title={app.name}>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <div className="mt-5 flex space-x-5 flex-wrap">
          {screens.map((screen) => {
            return <Screen url={screen.image} style={app.type} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const app = getAppContent(params.slug);
  const screens = listAppScreenContent(params.slug, 1, 30);
  return {
    props: {
      app,
      screens,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apps = listAllAppContent();
  const paths = apps.map((app) => ({
    params: {
      slug: app.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default App;
