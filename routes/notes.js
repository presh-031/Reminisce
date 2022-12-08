const express = require("express");
const router = express.Router();
// const notesController = require("../controllers/notes");
const { getNotes, createNote, markRead, markUnread, deleteNote } = require("../controllers/notes");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, getNotes);

router.post("/createNote", createNote);

router.put("/markComplete", () => {
  markRead;
});

router.put("/markIncomplete", () => {
  markUnread;
});

router.delete("/deleteNote", deleteNote);

module.exports = router;
