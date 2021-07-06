import { parseMarkdown, getGithubPreviewProps } from "next-tinacms-github";

const form = () => {
  return {
    label: "Home Page",
    fields: [
      {
        label: "Title",
        name: "title",
        component: "text",
        validation(title) {
          if (!title) return "Required.";
        },
      },
      {
        label: "Category",
        name: "category",
        component: "select",
        description: "Select the category",
        options: [
          { label: "Mobile", value: "mobile" },
          { label: "Desktop", value: "desktop" },
        ],
      },
    ],
  };
};

export const FormProps = async ({ previewData, slug }) => {
  return {
    ...(
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: `content/articles/${slug}.md`,
        parse: parseMarkdown,
      })
    ).props,
  };
};

export default form;
