import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const updateUser = async (req, res, next) => {
  console.log("log from updateUser", req.user.id);
  if (req.user.id !== req.params.id)
    return next(errorHandler(403, "Unauthorized"));

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...response } = updateUser._doc;
    res
      .status(200)
      .json({ response_msg: "user updated successfully!!", response }); // {"response": "user updated successfully!!"}
  } catch (error) {
    next(error);
  }
};
