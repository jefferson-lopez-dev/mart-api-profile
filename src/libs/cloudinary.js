import { v2 as cloudinary } from "cloudinary";

export const config = cloudinary.config({
  cloud_name: "jeffersoncloud",
  api_key: "736842571468583",
  api_secret: "XBZuQH9IA5WW2u6-Uw7yaK6xtts",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "photos",
    width: 320,
    height: 320,
    crop: "fill",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
