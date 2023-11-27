import CredsProfile from "../../schemas/creds-profile.js";
import { deleteImage } from "../../libs/index.js";

export const deletePicture = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await CredsProfile.findOne({ id });

    if (data.picture.status) {
      await deleteImage(data.picture.public_id);
      await profile_user.findByIdAndUpdate(data._id, {
        picture: {
          url: "",
          public_id: "",
          status: false,
        },
      });
      return res.json({
        message: "Your Photo deleted successfully",
        status: 200,
      });
    }
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
