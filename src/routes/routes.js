import { Router } from "express";
import * as c from "../controllers/index.js";

export const creds = Router();
const welcome = {
  message: "Welcome to api mart pos creds",
};

creds.get("/", (req, res) => res.json(welcome));
creds.post("/creds_profile", c.getCredsProfile);
creds.put("/creds_profile", c.putCredsProfile);
creds.put("/creds_profile/picture", c.updatePicture);
creds.delete("/creds_profile/picture", c.deletePicture);
