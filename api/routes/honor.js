const router = require("express").Router();

const Honor = require("../models/Honor");

//Create Honor
router.post("/", async (req, res) => {
  const newHonor = new Honor(req.body);
  try {
    const savedHonor = await newHonor.save();
    res.status(200).json(savedHonor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Honor
router.put("/:id", async (req, res) => {
  try {
    const honor = await Honor.findById(req.params.id);
    if (honor.userName === req.body.userName) {
      try {
        const updatedHonor = await Honor.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedHonor);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your honor");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete Honor

router.delete("/:id", async (req, res) => {
  try {
    const honor = await Honor.findById(req.params.id);
    if (honor.userName === req.body.userName) {
      try {
        await honor.delete();
        res.status(200).json("Honor has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your honor");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Get Honor
router.get("/:id", async (req, res) => {
  try {
    const honor = await Honor.findById(req.params.id);
    res.status(200).json(honor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Honor
router.get("/", async (req, res) => {
  const userName = req.query.user;
  try {
    let honors;
    if (userName) {
      honors = await Honor.find({ userName });
    }
    res.status(200).json(honors);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
