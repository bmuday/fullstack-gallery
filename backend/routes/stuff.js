const express = require("express");
const router = express.Router();

const {
  createThing,
  getThing,
  updateThing,
  deleteThing,
  getAllThings,
  deleteAllThings,
} = require("../controllers/stuff");

const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

// CREATE STUFF
router.post("/", auth, multer, createThing);

// GET ONE STUFF(ID)
router.get("/:id", auth, getThing);

// UPDATE ONE STUFF(ID)
router.put("/:id", auth, multer, updateThing);

// DELETE ONE STUFF(ID)
router.delete("/:id", auth, deleteThing);

// GET ALL STUFF
router.get("/", auth, getAllThings);

// DELETE ALL STUFF
router.delete("/", auth, deleteAllThings);

module.exports = router;
