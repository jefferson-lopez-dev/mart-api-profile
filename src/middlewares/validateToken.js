import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const TokenRequired = (req, res, next) => {
  const { TK_AWGAP } = req.cookies;

  if (!TK_AWGAP) {
    return res.status(401).json({
      message: null,
      status: 404,
      error: "No token, authorization denied",
    });
  }

  jwt.verify(TK_AWGAP, TOKEN_SECRET, (err, gmail) => {
    if (err)
      res
        .status(err)
        .json({ message: null, status: 404, message: "Invalid token" });

    req.gmail = gmail;
    next();
  });
};
