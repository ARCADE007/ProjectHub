const mongoose = require("mongoose");

const LinksSchema = new mongoose.Schema(
  {
    instagramLink: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    mailLink: {
      type: String,
      required: true,
    },
    linkedinLink: {
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

module.exports = mongoose.model("Links", LinksSchema);
