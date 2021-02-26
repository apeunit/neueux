import Layout from "../../components/Layout";
import React from "react";
import Screen from "../../components/card/Screen.js";
import HeaderView from "../../components/sections/HeaderView";
import { useRouter } from "next/router";
import SampleData from "../../lib/sample";

const App = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const apps = SampleData;
  const app = apps.find((a) => {
    return a.slug === slug;
  });

  if (!app) {
    return null;
  }

  return (
    <Layout title={app.name}>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <div className="mt-5 flex space-x-5">
          {app.screens.map((screen) => {
            return <Screen url={screen.image} style={app.type} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export default App;
