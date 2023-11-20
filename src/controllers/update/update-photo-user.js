import profile_user from "../../schemas/user/schema-user.js";
import fs from "fs-extra";
import { deleteImage, uploadImage } from "../../libs/cloudinary.js";

export const update_photo_user = async (req, res) => {
  try {
    const data = await profile_user.findOne({ createdBy: req.gmail.id });

    if (req.files === null) {
      return res.json({
        message: {
          success: null,
          error: "Photo is required for change your photo profile",
        },
        status: 200,
      });
    }

    let profile_picture = null;
    if (req.files) {
      if (
        data.profile_picture.public_id !== undefined ||
        data.profile_picture !== null
      ) {
        await deleteImage(data.profile_picture.public_id);
      }
      const result = await uploadImage(req.files.photo.tempFilePath);
      await fs.remove(req.files.photo.tempFilePath);
      profile_picture = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    await profile_user.findByIdAndUpdate(data._id, {
      profile_picture,
    });

    return res.json({
      message: {
        success: "Your Photo has been updated",
        error: null,
      },
      status: 200,
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: {
        success: null,
        error: [error.message, "An error occurred. Please try again later."],
      },
    });
  }
};
