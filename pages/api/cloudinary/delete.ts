// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  Cloudinary from "plugins/cloudinary";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error, _req, res: any) {
    console.log(error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req: any, res: any) => {
  const { id } = req.query;
  Cloudinary.api.delete_resources(
    [id],
    function (error, result) {
      res.status(200).json(result);
    }
  );
});

export default apiRoute;
