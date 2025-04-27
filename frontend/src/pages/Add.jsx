import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { toast } from "react-toastify";

const Add = () => {
    const {addNotes} = useContext(NoteContext);
    const date = new Date().toISOString().slice(0, 10);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            addNotes(title, description, tag);
            setTitle("");
            setDescription("");
            setTag("");
        } catch(error) {
            toast.error(error);
        }
    }
    return (
        <div className="m-5 py-5 rounded-3 border">
            <h2 className="mx-5">Add Note</h2>
            <form className="row g-3 mx-5 mt-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="tag" className="form-label fw-bold">Tag</label>
                    <input value={tag} onChange={(e) => setTag(e.target.value)} type="text" className="form-control" id="tag" placeholder="#General" />
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label fw-bold">Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Add Description" />
                </div>
                <div className="col-12">
                    <label htmlFor="date" className="form-label">Today's Date:</label>
                    <input type="date" className="form-control" id="date" placeholder="DD/MM/YY" defaultValue={date} disabled />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add