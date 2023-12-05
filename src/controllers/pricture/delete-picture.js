import CredsProfile from "../../schemas/creds-profile.js";
import { deleteImage } from "../../libs/index.js";

export const deletePicture = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CredsProfile.findById(id);

    const not_picture_url =
      "https://res.cloudinary.com/jeffersoncloud/image/upload/v1701628837/photos/e9fqfyuthrjjo9ojcw6p.jpg";

    if (data.picture.status) {
      await deleteImage(data.picture.public_id);
      await CredsProfile.findByIdAndUpdate(data._id, {
        picture: {
          url: not_picture_url,
          public_id: "jeffersoncloud",
          status: true,
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
