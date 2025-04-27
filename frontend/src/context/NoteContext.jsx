import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NoteContext = createContext();
const NoteContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const token = localStorage.getItem("token");
    const [noteDataN, setNoteDataN] = useState([]);
    const getAllNotes = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/notes/getAllNotes", {headers: {token}});
            if(response.data.success) {
                setNoteDataN(response.data.notes);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }
    useEffect(() => {
        getAllNotes();
    }, []);
    const addNotes = async (title, description, tag) => {
        try {
            const noteData = {
                title: title,
                description: description,
                tag: tag
            }
            const response = await axios.post(backendUrl + "/api/notes/addNotes", noteData, {headers: {token}});
            if(response.data.success) {
                getAllNotes();
                toast.success(response.data.msg);
            } else {
                toast.error(response.data.errors || response.data.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }
    const updateNote = async (id, title, description, tag) => {
        try {
            let noteData = {};
            if(title) noteData.title = title;
            if(description) noteData.description = description;
            if(tag) noteData.tag = tag;
            const response = await axios.put(backendUrl + `/api/notes/updateNote/${id}`, noteData, {headers: {token}});
            if(response.data.success) {
                getAllNotes();
                toast.success(response.data.msg);
            } else {
                toast.error(response.data.errors || response.data.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }
    const deleteNote = async (id) => {
        try {
            const response = await axios.delete(backendUrl + `/api/notes/deleteNote/${id}`, {headers: {token}});
            if(response.data.success) {
                getAllNotes();
                toast.success(response.data.msg);
            } else {
                toast.error(response.data.errors || response.data.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }
  return (
    <NoteContext.Provider value={{getAllNotes, addNotes, backendUrl, token, noteDataN, updateNote, deleteNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext};
export default NoteContextProvider