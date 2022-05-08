const router = require("express").Router();

const Project = require("../models/Project");

//Create Project
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Project
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userName === req.body.userName) {
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedProject);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your project");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Project

router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userName === req.body.userName) {
      try {
        await project.delete();
        res.status(200).json("Project has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your project");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Project
router.get("/", async (req, res) => {
  const userName = req.query.user;
  try {
    let honors;
    if (userName) {
      honors = await Project.find({ userName });
    }
    res.status(200).json(honors);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
