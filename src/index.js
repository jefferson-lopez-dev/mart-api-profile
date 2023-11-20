import app from "./app.js";
import { ConnectionDB } from "./data-base.js";
import * as dotenv from "dotenv";
import colors from "colors";

dotenv.config();
ConnectionDB();

const PORT = process.env.PORT || 3014;

app.listen(PORT, () => {
  console.log(` ● Server on port ${PORT} `.toUpperCase().bgBrightBlue.bold);
  console.log(" ➞ http://localhost:3014 ".underline.black.bold);
});
