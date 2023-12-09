import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "http://defaultavatarurl.png",
    },
  },
  { timestamps: true } // add this so that mongodb is going to add the time of creation and the time of update of the user
);

const User = mongoose.model("User", userSchema);

export default User;
