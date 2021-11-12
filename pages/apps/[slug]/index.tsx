import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "components/Layout";
import React, { useEffect } from "react";
import HeaderView from "components/app/HeaderView";
import { getAppContent, listAllAppContent } from "lib/app";
import {  getAllAppScreenContent } from "lib/screen";
import Filter from "components/filter";
import { filteredTagsByApp } from "lib/tags";
import { filteredUserflowsByApp } from "lib/userflows";

import { useRouter } from "next/router";
import ScreenList from "components/app/screen/List";

const App = ({
  appData,
  screens,
  tags,
  userflows,
  preview,
  slug
}) => {

  const app = () => {
    return appData;
  };

  

  const router = useRouter();

  useEffect(()=>{
    if(preview){
      router.replace(`/editor/apps/${appData.slug}`);
    }
  }, [preview])

  const filtered = () => {
    if (preview) return app().screens;

    let userflows: any = router.query.userflows;
    let tags: any = router.query.tags;

    if (userflows && !Array.isArray(userflows)) {
      userflows = [userflows];
    }

    if (tags && !Array.isArray(tags)) {
      tags = [tags];
    }

    return screens.filter(
      (it) =>
        (!userflows && !tags) ||
        (userflows &&
          userflows.some((u) =>
            it.userflows?.some((userflow) => userflow.id == u)
          )) ||
        (tags && tags.some((t) => it.tags?.some((tag) => tag.id == t)))
    );
  };

  return (
    <Layout
      title={`${app().name} - App`}
      description={app().description}
      backButton
      editable
      image={{
        src: app().icon,
      }}
    >
      <main className="w-11/12 mx-auto max-w-8xl">
        <HeaderView app={app()} />

        <div className="my-8">
          <Filter tags={tags} userflows={userflows} routeParams={{ slug: app().slug, }} routePathname={null} fallbackRoutePathname={null} showResult={true} />
        </div>

        <ScreenList
          app={app()}
          screens={filtered()}
          showAll={true}
          preview={preview}
        />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview,
}) => {
  const slug = String(params.slug);
  const tags = filteredTagsByApp(slug);
  const userflows = filteredUserflowsByApp(slug);

  const app = getAppContent(slug);

  const screens = getAllAppScreenContent(app.slug);

  return {
    props: {
      appData: app,
      screens,
      tags,
      userflows,
      preview: preview || false,
      attributes: {},
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apps = listAllAppContent();
  const paths = [];
  apps.forEach((app) => {
    paths.push({
      params: {
        slug: app.slug,
      },
    });
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export default App;
