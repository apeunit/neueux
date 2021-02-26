import Layout from "../components/Layout";
import React from "react";
import AppCard from "../components/card/App";
import Header from "../components/sections/Header";
import SampleData from '../lib/sample';



const IndexPage = () => {
  const apps = SampleData;
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto">
        <Header title="Screen gallery"/>
        {apps.map((app) => {
          return <AppCard app={app} />;
        })}
      </main>
    </Layout>
  );
};

export default IndexPage;
