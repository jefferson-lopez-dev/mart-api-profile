import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
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

export function parseCloudinaryURL(url) {
  const regex =
    /(https:\/\/res\.cloudinary\.com\/jeffersoncloud\/image\/upload\/)(.*?)\/(photos\/.+\.jpg)/;
  const match = url.match(regex);

  if (match) {
    const baseUrl = match[1];
    const imagePath = match[3];
    const optimizedImage = `${baseUrl}c_fill,h_320,w_320/${imagePath}`;

    return {
      optimizedImage,
    };
  } else {
    return null;
  }
}
