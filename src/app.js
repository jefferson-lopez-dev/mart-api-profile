import express from "express";
import cors from "cors";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import { company, user } from "./routes/routes.js";

const app = express();

app.use(
  cors({
    origin: {
      global,
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./photos",
  })
);
app.use("/api/user", user);
app.use("/api/company", company);

export default app;
