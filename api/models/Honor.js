const mongoose = require("mongoose");

const HonorSchema = new mongoose.Schema(
  {
    achievementPic: {
      type: String,
      required: false,
      default: "",
    },
    honorDetails: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Honor", HonorSchema);
