import CredsProfile from "../../schemas/creds-profile.js";

export const getCredsProfile = async (req, res) => {
  try {
    const { id } = req.body;
    return res.json({ id: "asdasd" });
    const data = await CredsProfile.findOne({ createdBy: id });

    if (data === null) {
      const data = new CredsProfile({
        picture: {
          url: "",
          public_id: "",
          status: false,
        },
        fullname: "",
        country: "",
        email: "",
        createdBy: id,
      });
      await data.save();
    }

    return res.json({
      creds_profile: {
        picture: data.picture,
        fullname: data.fullname,
        country: data.country,
        email: data.email,
        createdAt: data.createdAt.toLocaleDateString(),
      },
      status: 204,
      message: "The information has been successfully sent.",
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: {
        success: null,
        error: error.message,
      },
    });
  }
};
