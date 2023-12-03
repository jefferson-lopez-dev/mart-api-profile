import CredsProfile from "../../schemas/creds-profile.js";

export const getCredsProfile = async (req, res) => {
  try {
    const { id, fullname, country, email } = req.body;

    if (id === undefined) {
      return res.json({ message: "ID is required" });
    }

    const data = await CredsProfile.findOne({ createdBy: id });

    if (data === null) {
      const data = new CredsProfile({
        picture: {
          url: "",
          public_id: "",
          status: false,
        },
        fullname,
        country,
        email,
        createdBy: id,
      });
      const profileSaved = await data.save();

      return res.json({
        creds_profile: {
          picture: profileSaved.picture,
          fullname: profileSaved.fullname,
          country: profileSaved.country,
          email: profileSaved.email,
          createdBy: profileSaved.createdBy,
          createdAt: profileSaved.createdAt.toLocaleDateString(),
          status: true,
        },
        id: profileSaved._id,
        status: 204,
        message: "New information has been created, submitted successfully",
      });
    }
    return res.json({
      creds_profile: {
        picture: data.picture,
        fullname: data.fullname,
        country: data.country,
        email: data.email,
        createdBy: data.createdBy,
        createdAt: data.createdAt.toLocaleDateString(),
        status: true,
      },
      id: data._id,
      status: 204,
      message: "Information found, and sent successfully",
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
