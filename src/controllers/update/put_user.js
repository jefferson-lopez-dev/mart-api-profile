import profile_user from "../../schemas/user/schema-user.js";

export const update_data_user = async (req, res) => {
  try {
    const { name, last_name, country, age, city, email } = req.body;

    await profile_user.findOneAndUpdate(
      { createdBy: req.gmail.id },
      {
        name,
        last_name,
        country,
        age,
        city,
        email,
      },
      { new: true }
    );

    return res.json({
      message: {
        success: "Your information has been updated",
        error: null,
      },
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
