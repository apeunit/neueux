import {
  parseJson,
  getGithubFile,
  getGithubPreviewProps,
} from "next-tinacms-github";
import { FormOptions } from "tinacms";
import { Field } from "types/Field";

const form = (slug, attributes): FormOptions<any, Field> => {
  const userflowsOptions = attributes?.userflows?.map((userflow) => ({
    value: userflow.id,
    label: userflow.name,
  }));

  const tagsOptions = attributes?.tags?.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));

  return {
    id: "app-form-extended",
    label: "App Form",
    onSubmit: () => {},
    fields: [
      {
        label: "Name",
        name: "name",
        component: "text",
        validate(name) {
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
        itemProps: (item) => {
          let label = "Screen list item";
          if (item.image) {
            const name = item.image?.split("/")?.reverse()[0];
            label = name || label;
          }
          return {
            key: item.id,
            label,
          };
        },
        defaultItem: () => ({
          // name: Math.random().toString(36).substr(2, 9),
          id: `${Math.random().toString(36).substr(2, 9)}${Date.now()}`,
        }),
        fields: [
          {
            label: "Image",
            name: "image",
            component: "image",
            // Generate the frontmatter value based on the filename
            parse: (media) => media.previewSrc,
            uploadDir: () => `neueux/media/${slug}/screens`,
          },
          {
            label: "Userflow",
            name: "userflows",
            component: "list",
            description: "Select the userflow type",
            field: {
              component: "select",
              options: userflowsOptions,
            },
          },
          {
            label: "Tag",
            name: "tags",
            component: "list",
            field: {
              component: "select",
              options: tagsOptions,
            },
          },
        ],
      },
    ],
  };
};

export const FormProps = async ({ previewData, slug }) => {
  const attributes = await getGithubFile({
    ...previewData,
    fileRelativePath: "content/meta/attributes.json",
    parse: parseJson,
  });

  return {
    ...(
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: `content/apps/${slug}.json`,
        parse: parseJson,
      })
    ).props,
    attributes: attributes.data,
  };
};

export default form;
