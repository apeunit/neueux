import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import Layout from "components/Layout";

import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps } from "next-tinacms-github";

const Home = function Home({ file }) {
  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Tags List",
        name: "tags",
        component: "group-list",
        description: "Tags List",
        itemProps: (item) => ({
          key: item.id,
          label: item.name,
        }),
        defaultItem: () => ({
          name: "New Tag",
          id: Math.random().toString(36).substr(2, 9),
        }),
        fields: [
          {
            label: "Name",
            name: "name",
            component: "text",
            validation(name) {
              if (!name) return "Required.";
            },
          },
        ],
      },
      {
        label: "Userflow List",
        name: "userflows",
        component: "group-list",
        description: "Userflow List",
        itemProps: (item) => ({
          key: item.id,
          label: item.name,
        }),
        defaultItem: () => ({
          name: "New Userflow",
          id: Math.random().toString(36).substr(2, 9),
        }),
        fields: [
          {
            label: "Name",
            name: "name",
            component: "text",
            validation(name) {
              if (!name) return "Required.";
            },
          },
        ],
      },
    ],
  };

  // Registers a JSON Tina Form
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  return (
    <Layout title="Edit - Attributes" backButton editable>
      <div className="w-3/5 mx-auto">
        <h2 className="my-8 px-2 text-lg font-bold">Tags</h2>
        <div className="mt-8 border border-solid divide-y divide-solid">
          {data.tags &&
            data.tags.map((tag) => (
              <div className="w-full px-5 py-5">
                <h3>{tag.name}</h3>
              </div>
            ))}
        </div>
        <h2 className="my-8 px-2 text-lg font-bold">Userflows</h2>
        <div className="mt-8 border border-solid divide-y divide-solid">
          {data.userflows &&
            data.userflows.map((tag) => (
              <div className="w-full px-5 py-5 ">
                <h3>{tag.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return {
      props: {
        ...(
          await getGithubPreviewProps({
            // @ts-ignore
            ...previewData,
            fileRelativePath: "content/meta/attributes.json",
            parse: JSON.parse,
          })
        ).props,
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
        fileRelativePath: "content/meta/attributes.json",
        data: (await import("content/meta/attributes.json")).default,
      },
    },
  };
};

export default Home;
