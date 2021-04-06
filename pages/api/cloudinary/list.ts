// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cloudinary from "plugins/cloudinary";

export default (req, res) => {
  const { tag, max_results } = req.query;
  if (!tag) {
    Cloudinary.api.resources(
      { max_results, pages: true, context: true, moderations: true },
      function (error, result) {
        error && console.error(error)
        res.status(200).json(result);
      }
    );
  } else {
    Cloudinary.api.resources_by_tag(
      tag,
      { max_results, pages: true, context: true, moderations: true },
      function (error, result) {
        error && console.error(error)
        res.status(200).json(result);
      }
    );
  }
};
