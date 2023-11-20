import mongoose from "mongoose";

export const ConnectionDB = async () => {
  const URL =
    "mongodb+srv://jefferson__dev:T87alLXy3W8E6z6J@mart-auth.p6ynru1.mongodb.net/mart-auth?retryWrites=true&w=majority";
  try {
    const db = await mongoose.connect(URL);
    console.log(`● DB is connected ${db.connection.name}`.green.bold);
  } catch (error) {
    console.log(`● Disconnected to db ${db.connection.name}`.red.bold, error);
  }
};
