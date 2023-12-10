import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js ";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookiePaser from "cookie-parser";
import { customErrorHandler } from "./middleware/middleware.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookiePaser());

app.listen(3000, () => {
  console.log("server running on port 3000...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(customErrorHandler);
