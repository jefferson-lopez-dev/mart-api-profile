import profile_user from "../../schemas/creds-profile.js";

export const putCredsProfile = async (req, res) => {
  try {
    const { fullname, country, email, id } = req.body;
    const data = {
      fullname,
      country,
      email,
    };

    await profile_user.findOneAndUpdate({ createdBy: id }, data, { new: true });
    return res.json({
      message: "Your information has been updated",
      status: 200,
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
