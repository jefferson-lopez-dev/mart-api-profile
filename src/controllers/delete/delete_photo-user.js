import profile_user from "../../schemas/user/schema-user.js";
import { deleteImage } from "../../libs/cloudinary.js";

export const delete_photo_user = async (req, res) => {
  try {
    const data = await profile_user.findOne({ createdBy: req.gmail.id });

    if (data.profile_picture.status === false) {
      return res.json({
        status: 200,
        message: {
          message: null,
          error: "you don't have a profile photo",
        },
      });
    }

    await deleteImage(data.photo.public_id);
    await profile_user.findByIdAndUpdate(data._id, {
      profile_picture: {
        url: "https://res.cloudinary.com/jeffersoncloud/image/upload/v1696372908/photos/uyxfige29a068ejktmpm.webp",
        public_id: "photos/uyxfige29a068ejktmpd",
        status: false,
      },
    });

    return res.json({
      message: {
        success: "Your Photo deleted successfully",
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
