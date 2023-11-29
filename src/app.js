import express from "express";
import cors from "cors";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import { creds } from "./routes/routes.js";

const app = express();
const fileuploadJson = {
  useTempFiles: true,
  tempFileDir: "./photos",
};
const corsJson = {
  origin: {
    global,
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsJson));
app.use(express.json());
app.use(cookieParser());
app.use(fileupload(fileuploadJson));
app.use("/api", creds);

export default app;
