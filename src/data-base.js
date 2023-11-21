import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const URL_DATABASE = process.env.URL_MONGO_DB_LOCAL;

export const ConnectionDB = async () => {
  try {
    const db = await mongoose.connect(URL_DATABASE);
    console.log(`● DB is connected ${db.connection.name}`.green.bold);
  } catch (error) {
    console.log(`● Disconnected to db ${db.connection.name}`.red.bold, error);
  }
};
