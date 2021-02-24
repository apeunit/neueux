import Layout from "../components/Layout";
import React from "react";
import AppCard from "../components/card/App";
import Header from "../components/sections/Header";




const IndexPage = () => {
  const apps = [
    {
      name: "Argent - DeFi in a tap",
      logo: "/img/1.png",
      type: "mobile",
      screens: [
        { image: "/img/2.png" },
        { image: "/img/4.png" },
        { image: "/img/5.png" },
        { image: "/img/6.png" },
        { image: "/img/7.png" },
        { image: "/img/8.png" },
      ],
    },

    {
      name: "Atomic Wallet",
      logo: "/img/logo2.png",
      type: "mobile",
      screens: [
        { image: "/img/11.png" },
        { image: "/img/12.png" },
        { image: "/img/13.png" },
        { image: "/img/14.png" },
        { image: "/img/15.png" },
        { image: "/img/16.png" },
      ],
    },

    {
      name: "Desktop app",
      logo: "/img/1.png",
      type: "desktop",
      screens: [{ image: "/img/3.png" }, { image: "/img/3.png" }],
    },
  ];
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
