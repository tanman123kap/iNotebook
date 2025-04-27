import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NoteContext.jsx";

const Notes = () => {
    const {noteDataN} = useContext(NoteContext);
  return (
    <>
        {noteDataN.length > 0 ? <div className="row mx-2">
        {noteDataN.slice(0, 4).map((note, index) => (
            <div key={index} className="border rounded-2 p-2 m-2 col">
                <h5>{note.title}</h5>
                <p>{note.description}</p>
                <p className="d-flex flex-wrap justify-content-between text-secondary"><span className="me-2">{note.tag}</span><span>{note.date.slice(0, 10)}</span></p>
            </div>
        ))}
        </div> : <div className="mx-2">
            <p className="m-2 text-dark p-2">No Notes Added!<br /><Link to="/add">Go to Add Notes Page &rarr;</Link></p>
        </div>}
    </>
  )
}

export default Notes