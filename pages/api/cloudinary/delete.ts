// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cloudinary from "../../../lib/cloudinary";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.log(error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req, res) => {
  const { id } = req.query;
  console.log(`id`, req);

  Cloudinary.api.delete_resources(
    [id],
    function (error, result) {
      res.status(200).json(result);
    }
  );
});

export default apiRoute;
