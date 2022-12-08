const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, notesController.getNotes);

router.post("/createNote", notesController.createNote);

router.put("/markComplete", notesController.markRead);

router.put("/markIncomplete", notesController.markUnread);

router.delete("/deleteNote", notesController.deleteNote);

module.exports = router;
