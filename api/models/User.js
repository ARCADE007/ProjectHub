const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
      default: "",
    },
    lastName: {
      type: String,
      required: false,
      default: "",
    },
    skill1: {
      type: String,
      required: false,
      default: "",
    },
    skill2: {
      type: String,
      required: false,
    },
    skill3: {
      type: String,
      required: false,
      default: "",
    },
    skill4: {
      type: String,
      required: false,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    aboutYou: {
      type: String,
      required: false,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
