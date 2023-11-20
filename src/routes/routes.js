import { Router } from "express";
import { TokenRequired } from "../middlewares/validateToken.js";
import {
  delete_photo_user,
  get_data_user,
  update_data_user,
  update_photo_user,
} from "../controllers/index.js";

export const user = Router();
export const company = Router();

//USERS
user.get("/", (req, res) => {
  res.json("success");
});
user.get("/profile", TokenRequired, get_data_user);
user.put("/profile", TokenRequired, update_data_user);
user.put("/profile/photo", TokenRequired, update_photo_user);
user.delete("/profile/photo", TokenRequired, delete_photo_user);

//COMPANIES
company.get("/profile", TokenRequired);
company.post("/profile", TokenRequired);
company.put("/profile", TokenRequired);
