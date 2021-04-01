// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  Cloudinary from "plugins/cloudinary";
import nextConnect from "next-connect";
import multer from "multer";
import Path from 'path';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

const apiRoute = nextConnect({
  onError(error, _req: any, res: any) {
    console.log(error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));

apiRoute.post(async (req: any, res: any) => {
  const file = req.file;
  const path = Path.parse(file.originalname);
  let { directory } = req.body;
  
  Cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
    {
      tags: directory !== '/' ? [directory] : [],
      overwrite: true,
      public_id: `${directory}/${path.name}`,
    },
    function (error, result) {
      error && console.error(error)
      res.status(200).json(result);
    }
  );
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
