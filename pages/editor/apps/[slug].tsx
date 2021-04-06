import Layout from "components/Layout";
import React from "react";
import Screen from "components/app/screen/Card";
import HeaderView from "components/app/HeaderView";

import {
  getGithubPreviewProps,
  parseJson,
  getGithubFile,
} from "next-tinacms-github";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";

import { listAllAppContent } from "lib/app";

export default function Home({ file, attributes }) {
  const userflowsOptions = attributes?.userflows?.map((userflow) => ({
    value: userflow.id,
    label: userflow.name,
  }));

  const tagsOptions = attributes?.tags?.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));

  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Name",
        name: "name",
        component: "text",
        validation(name) {
          if (!name) return "Required.";
        },
      },
      {
        label: "Description",
        name: "description",
        component: "text",
      },
      {
        label: "Device",
        name: "device",
        component: "select",
        description: "Select the device type",
        options: [
          { label: "Mobile", value: "mobile" },
          { label: "Desktop", value: "desktop" },
        ],
      },
      {
        label: "Icon",
        name: "icon",
        component: "image",
        // Generate the frontmatter value based on the filename
        parse: (media) => media.previewSrc,
        uploadDir: () => "neueux/media/apps-logo",
      },
      {
        label: "Screen List",
        name: "screens",
        component: "group-list",
        description: "Screen List",
        itemProps: (item) => ({
          key: item.id,
          label: `Screen list item ${item.id}`,
        }),
        defaultItem: () => ({
          // name: Math.random().toString(36).substr(2, 9),
          id: Math.random().toString(36).substr(2, 9),
        }),
        fields: [
          {
            label: "Image",
            name: "image",
            component: "image",
            // Generate the frontmatter value based on the filename
            parse: (media) => media.previewSrc,
            uploadDir: () => `neueux/media/${app.slug}/screens`,
          },
          {
            label: "Userflow",
            name: "userflow",
            component: "select",
            description: "Select the userflow type",
            options: userflowsOptions,
          },
          {
            label: "Tag",
            name: "tags",
            component: "list",
            defaultItem: "Turkey & Swiss",
            field: {
              component: "select",
              options: tagsOptions,
            },
          },
        ],
      },
    ],
  };

  // Registers a JSON Tina Form
  const [app, form] = useGithubJsonForm(file || {}, formOptions);
  usePlugin(form);
  return (
    <Layout title={`Edit - ${app.name} - App`} backButton>
      <main className="w-11/12 mx-auto">
        <HeaderView app={app} />
        <div
          className={[
            "mt-5 grid  gap-5",
            app.device === "mobile"
              ? "lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-1/4 grid-cols-2"
              : "lg:grid-cols-2 grid-cols-1 md:grid-cols-1 sm:grid-cols-1",
          ].join(" ")}
        >
          {app?.screens?.map((screen) => {
            if (!screen.image) return null;
            return (
              <Screen key={screen.id} url={screen.image}  style={app.device} />
            );
          })}
        </div>
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
    const attributes = await getGithubFile({
      ...previewData,
      fileRelativePath: "content/meta/attributes.json",
      parse: parseJson,
    });
    return {
      props: {
        ...(
          await getGithubPreviewProps({
            ...previewData,
            fileRelativePath: `content/apps/${slug}.json`,
            parse: parseJson,
          })
        ).props,
        attributes: attributes.data,
        editable: true,
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
      attributes: (await import(`content/meta/attributes.json`)).default,
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
