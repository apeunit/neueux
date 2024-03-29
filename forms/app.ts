import Slugify from "slugify";
import { ContentCreatorPlugin } from "tinacms";

const form = (
  callback = (slug) => {
    return slug;
  }
): ContentCreatorPlugin<any> => {
  return {
    name: "Apps",
    __type: "content-creator",
    fields: [
      {
        label: "Name",
        name: "name",
        component: "text",
        validate(name) {
          if (!name) return "Required.";
        },
      },
    ],
    onSubmit(values, cms) {
      // Call functions that create the new blog post. For example:
      if (values.name) {
        const id = Math.random().toString(36).substr(2, 9);
        const slug = `app-${Date.now()}-${Slugify(values.name, {
          lower: true,
        })}-${id}`;

        (async () => {
          const app = {
            id,
            slug,
            ...values,
            device: "mobile",
          };
          await cms.api.github.commit(
            `content/apps/${slug}.json`,
            null,
            JSON.stringify(app),
            "Update from TinaCMS"
          );
          callback(slug);
        })();
      }
    },
  };
};

export default form;
