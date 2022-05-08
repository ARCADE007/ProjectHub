const router = require("express").Router();
const Links = require("../models/Links");

//Create Links
router.post("/", async (req, res) => {
  const newLinks = new Links(req.body);
  try {
    const savedLinks = await newLinks.save();
    res.status(200).json(savedLinks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Links
router.put("/:id", async (req, res) => {
  try {
    const links = await Links.findById(req.params.id);
    if (links.userName === req.body.userName) {
      try {
        const updatedLinks = await Links.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedLinks);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your links");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete Links

router.delete("/:id", async (req, res) => {
  try {
    const links = await Links.findById(req.params.id);
    if (links.userName === req.body.userName) {
      try {
        await links.delete();
        res.status(200).json("Links has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your links");
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

//Get User
router.get("/:id", async (req, res) => {
  try {
    const links = await Links.findById(req.params.id);
    res.status(200).json(links);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
