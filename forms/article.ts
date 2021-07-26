import Slugify from "slugify";
import Matter from "gray-matter";
import { ContentCreatorPlugin } from "tinacms";

const form = (
  callback = (slug) => {
    return slug;
  }
): ContentCreatorPlugin<any> => {
  return {
    name: 'Article',
    __type: "content-creator",
    fields: [
      {
        label: "Title",
        name: "title",
        component: "text",
        validate(title) {
          if (!title) return "Required.";
        },
      },
    ],
    onSubmit(values, cms) {
      // Call functions that create the new blog post. For example:
      if (values.title) {
        const id = Math.random().toString(36).substr(2, 9);
        const slug = `${Date.now()}-${Slugify(values.title, {
          lower: true,
        })}-${id}`;

        (async () => {
          const data = Matter.stringify(`# ${values.title}`, {
            id,
            title: values.title,
            slug,
            category: "",
          });
          await cms.api.github.commit(
            `content/articles/${slug}.md`,
            null,
            data,
            `Create ${values.title} article`
          );
          callback(slug);
        })();
      }
    },
  };
};

export default form;
