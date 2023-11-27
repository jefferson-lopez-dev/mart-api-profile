import { config as cloudinary } from "./cloudinary.js";

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
