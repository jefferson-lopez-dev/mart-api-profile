import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export function CreateAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "30d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
