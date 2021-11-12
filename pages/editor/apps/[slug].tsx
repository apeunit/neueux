import Layout from "components/Layout";
import React from "react";
import HeaderView from "components/app/HeaderView";

import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";

import { listAllAppContent } from "lib/app";

import AppFormExtended, { FormProps } from "forms/appExtended";
import ScreenList from "components/app/screen/List";

export default function AppView({ file, attributes, slug }) {
  const formOptions = AppFormExtended(slug, attributes);

  // Registers a JSON Tina Form
  const [app, form] = useGithubJsonForm(file || {}, formOptions);
  usePlugin(form);
  return (
    <Layout title={`Edit - ${app.name} - App`} backButton editable>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <ScreenList app={app} screens={app?.screens} showAll={true} preview={true} />
      </main>
    </Layout>
  );
}

export const getStaticProps = async function ({
  params,
  previewData,
  preview,
}) {
  const { slug } = params;

  if (preview) {
    return {
      props: {
        ...(await FormProps({ previewData, slug })),
        slug,
      },
    };
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      editable: true,
      file: {
        fileRelativePath: `content/apps/${slug}.json`,
        data: (await import(`content/apps/${slug}.json`)).default,
      },
      attributes: {},
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const apps = listAllAppContent();
  const paths = apps
    .filter((app) => app.slug)
    .map((app) => ({
      params: {
        slug: app.slug,
      },
    }));
  return {
    paths,
    fallback: true,
  };
};
