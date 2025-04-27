const notesModel = require("../models/notes.models");

const getAllNotes = async (req, res) => {
    try {
        const notes = await notesModel.find({user: req.user.id});
        res.json({success: true, notes});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

const addNotes = async (req, res) => {
    try {
        const {title, description, tag} = req.body;
        let notes;
        if(tag.length > 0) {
            notes = new notesModel({
                user: req.user.id,
                title: title,
                description: description,
                tag: tag,
                date: Date.now()
            });
        } else {
            notes = new notesModel({
                user: req.user.id,
                title: title,
                description: description,
                date: Date.now()
            });
        }
        await notes.save();
        res.json({success: true, msg: "Note Added!"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

const updateNote = async (req, res) => {
    try {
        const {title, description, tag} = req.body;
        let updatedNote = {};
        if(title) updatedNote.title = title;
        if(description) updatedNote.description = description;
        if(tag) updatedNote.tag = tag;
        let note = await notesModel.findById(req.params.id);
        if(!note) {
            return res.json({success: false, errors: "Not Found!"});
        } else if(note.user.toString() !== req.user.id) {
            return res.json({success: false, errors: "Not Authorized!"});
        } else {
            await notesModel.findByIdAndUpdate(req.params.id, {$set: updatedNote}, {new: true});
            return res.json({success: true, msg: "Note Updated!"});
        }
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

const deleteNote = async (req, res) => {
    try {
        let note = await notesModel.findById(req.params.id);
        if(!note) {
            return res.json({success: false, errors: "Not Found!"});
        } else if(note.user.toString() !== req.user.id) {
            return res.json({success: false, errors: "Not Authorized!"});
        } else {
            await notesModel.findByIdAndDelete(req.params.id);
            return res.json({success: true, msg: "Note Deleted!"});
        }
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

module.exports = {getAllNotes, addNotes, updateNote, deleteNote};