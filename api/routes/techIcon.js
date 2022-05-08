const router = require("express").Router();
const TechIcon = require("../models/TechIcon");

//Create TechIcon
router.post("/", async (req, res) => {
  const newTech = new TechIcon(req.body);
  try {
    const savedTech = await newTech.save();
    res.status(200).json(savedTech);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update TechIcon
router.put("/:id", async (req, res) => {
  try {
    const tech = await TechIcon.findById(req.params.id);
    if (tech.userName === req.body.userName) {
      try {
        const updatedTech = await TechIcon.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedTech);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your tech");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete TechIcon

router.delete("/:id", async (req, res) => {
  try {
    const tech = await TechIcon.findById(req.params.id);
    if (tech.userName === req.body.userName) {
      try {
        await tech.delete();
        res.status(200).json("TechIcon has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your tech");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Get TechIcon
router.get("/:id", async (req, res) => {
  try {
    const tech = await TechIcon.findById(req.params.id);
    res.status(200).json(tech);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All TechIcon
router.get("/", async (req, res) => {
  const userName = req.query.user;
  try {
    let techs;
    if (userName) {
      techs = await TechIcon.find({ userName });
    }
    res.status(200).json(techs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
