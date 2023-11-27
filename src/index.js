import { ConnectionDB } from "./data-base.js";
import * as dotenv from "dotenv";
import app from "./app.js";

ConnectionDB();
dotenv.config();

const PORT = process.env.PORT || 3014;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  console.log("http://localhost:3014");
});
