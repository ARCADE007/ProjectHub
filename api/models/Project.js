const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
