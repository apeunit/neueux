import Layout from "../components/Layout";
import React from "react";
import AppView from "../components/card/AppView";
import HeaderView from "../components/sections/HeaderView";

const App = () => {
  const apps = [
    {
      logo: "/img/1.png",
      screens: [
        { image: "/img/2.png" },
        { image: "/img/4.png" },
        { image: "/img/5.png" },
        { image: "/img/6.png" },
        { image: "/img/7.png" },
        { image: "/img/8.png" },
      ],
    },
  ];
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="w-11/12 mx-auto">
        <HeaderView/>
        {apps.map((app) => {
          return <AppView app={app} />;
        })}
      </main>
    </Layout>
  );
};

export default App;
