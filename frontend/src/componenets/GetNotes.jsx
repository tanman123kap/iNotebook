import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NoteContext } from "../context/NoteContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaFilePen } from "react-icons/fa6";
import { toast } from "react-toastify";

const GetNotes = () => {
    const { noteDataN, getAllNotes, updateNote, deleteNote } = useContext(NoteContext);
    const [currentId, setCurrentId] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const location = useLocation();
    const handleUpdate = async () => {
        try {
            updateNote(currentId, title, description, tag);
        } catch(error) {
            toast.error(error);
        }
    }
    const handleDelete = async (id) => {
        try {
            deleteNote(id);
        } catch(error) {
            toast.error(error);
        }
    }
    useEffect(() => {
        getAllNotes();
    }, [location]);
    return (
        <>
            {noteDataN.length > 0 ? <div className="row mx-2 justify-content-evenly">
                {noteDataN.map((note, index) => (
                    <div key={index} className="border rounded-2 p-3 m-2 col-md-3 col">
                        <h5>{note.title}</h5>
                        <p className="overflow-auto">{note.description}</p>
                        <p className="d-flex flex-wrap justify-content-between text-secondary"><span className="me-2">{note.tag}</span><span>{note.date.slice(0, 10)}</span></p>
                        <div>
                            <RiDeleteBin6Fill onClick={() => handleDelete(note._id)} className="me-3 fs-4 cursor-pointer" />
                            <FaFilePen onClick={() => {
                                setCurrentId(note._id),
                                setTitle(note.title),
                                setDescription(note.description),
                                setTag(note.tag);
                            }} data-bs-toggle="modal" data-bs-target="#exampleModal" className="me-3 fs-4 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div> : <div className="mb-5 p-4 text-center">
                <p className="m-2 text-dark p-2">No Notes Added!<br /><Link to="/add">Go to Add Notes Page &rarr;</Link></p>
            </div>}
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="title" className="form-label fw-bold">New Title</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="tag" className="form-label fw-bold">New Tag</label>
                                    <input value={tag} onChange={(e) => setTag(e.target.value)} type="text" className="form-control" id="tag" placeholder="#general" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="description" className="form-label fw-bold">New Description</label>
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Add Description" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleUpdate} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetNotes