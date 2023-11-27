import { config as cloudinary } from "./cloudinary.js";

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "photos",
    width: 320,
    height: 320,
    crop: "fill",
  });
};
