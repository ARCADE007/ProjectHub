const mongoose = require("mongoose");

const TechIconSchema = new mongoose.Schema(
  {
    techIcon: {
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

module.exports = mongoose.model("TechIcon", TechIconSchema);
