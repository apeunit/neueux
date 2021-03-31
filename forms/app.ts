import Slugify from "slugify";

const form  = (callback = (slug)=> {}) => {
  return {
    name: "Apps",
    __type: "content-creator",
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
    onSubmit(values, cms) {
      // Call functions that create the new blog post. For example:
      if (values.name) {
        const id = Math.random().toString(36).substr(2, 9);
        const slug = `${Slugify(values.name, {
          lower: true,
        })}-${id}`;

        (async () => {
          const app = {
            id,
            slug,
            ...values,
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