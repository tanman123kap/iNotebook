const express = require("express");
const notesRouter = express.Router();
const {addNotes, getAllNotes, updateNote, deleteNote} = require("../controllers/notes.controllers.js");
const authUser = require("../middleware/auth.js");

notesRouter.get("/getAllNotes", authUser, getAllNotes);
notesRouter.post("/addNotes", authUser, addNotes);
notesRouter.put("/updateNote/:id", authUser, updateNote);
notesRouter.delete("/deleteNote/:id", authUser, deleteNote);

module.exports = notesRouter;