import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const URL_DATABASE = process.env.URL_MONGO_DB_ATLAS;
const URL_DATABASE_LOCAL = "mongodb://localhost:27017/mart-mvp";

export const ConnectionDB = async () => {
  try {
    await connect(URL_DATABASE);
    console.log("● DB is connected");
  } catch (error) {
    console.log("● Disconnected to db", error);
  }
};
