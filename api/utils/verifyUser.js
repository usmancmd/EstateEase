import Jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log("first log");
  const token = req.cookies.access_token;

  console.log(token);
  if (!token) return next(errorHandler(401, "Unauthorized"));
  console.log("second log");

  try {
    Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return next(errorHandler(403, "Forbidden"));

      console.log(user);
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};
