import { parseMarkdown, getGithubPreviewProps } from "next-tinacms-github";

const form = () => {
  return {
    label: "Home Page",
    fields: [
      {
        label: "Title",
        name: "frontmatter.title",
        component: "text",
        validation(title) {
          if (!title) return "Required.";
        },
      },
      {
        label: "Summary",
        name: "frontmatter.summary",
        component: "text",
        validation(summary) {
          if (!summary) return "Required.";
        },
      },
      // {
      //   label: "Category",
      //   name: "frontmatter.category",
      //   component: "select",
      //   description: "Select the category",
      //   options: [
      //     { label: "Mobile", value: "mobile" },
      //     { label: "Desktop", value: "desktop" },
      //   ],
      // },
      {
        label: "Author",
        name: "frontmatter.author",
        component: "text",
        validation(author) {
          if (!author) return "Required.";
        },
      },
      {
        label: "Featured image",
        name: "frontmatter.featured_image",
        component: "image",
        // Generate the frontmatter value based on the filename
        parse: (media) => media.previewSrc,
        uploadDir: () => "neueux/media/articles",
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
