import { deleteImage, uploadImage } from "../../libs/index.js";
import CredsProfile from "../../schemas/creds-profile.js";
import fs from "fs-extra";

export const updatePicture = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CredsProfile.findById(id);

    if (req.files === null) {
      return res.json({
        message: "Photo is required for change your photo profile",
        status: 200,
      });
    }

    let picture = {
      url: "",
      public_id: "",
      status: false,
    };

    if (req.files) {
      if (data.picture.status === true) {
        await deleteImage(data.picture.public_id);
      }

      const result = await uploadImage(req.files.photo.tempFilePath);
      await fs.remove(req.files.photo.tempFilePath);

      picture = {
        url: result.secure_url,
        public_id: result.public_id,
        status: true,
      };
    }
    await CredsProfile.findByIdAndUpdate(data._id, { picture });

    return res.json({
      message: "Your Photo has been updated",
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
