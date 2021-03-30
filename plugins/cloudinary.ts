import { v2 as Cloudinary } from "cloudinary";

Cloudinary.config({
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export default Cloudinary;