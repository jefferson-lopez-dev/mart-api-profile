import DataUser from "../../schemas/user/schema-user.js";

export const get_data_user = async (req, res) => {
  try {
    const data = await DataUser.findOne({ createdBy: req.gmail.id });

    if (data === null) {
      const data = new DataUser({
        profile_picture: {
          url: "https://res.cloudinary.com/jeffersoncloud/image/upload/v1697035547/photos/rezuu3esrkx4shvtf5ay.webp",
          public_id: "photos/tjm6utzzkwjgkgl0bnbr",
          status: false,
        },
        name: "Mart",
        last_name: "Pos",
        country: "no data",
        city: "no data",
        email: "no data",
        age: 0,
        createdBy: req.gmail.id,
      });
      await data.save();
    }

    return res.json({
      data_user: {
        profile_picture: data.profile_picture,
        name: data.name,
        lastname: data.last_name,
        age: data.age,
        country: data.country,
        city: data.city,
        email: data.email,
        fullName: `${data.name} ${data.last_name}`,
        createdAt: data.createdAt.toLocaleDateString(),
      },
      account: null,
      status: 204,
      message: {
        success: "The information has been successfully sent.",
        error: null,
      },
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
