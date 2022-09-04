import React, { useState } from "react";
import Data from "../data/Data";

function NoteItem({ id,judul, desk }) {
    const data = Data.getAllNotes();

    function deleteNote(id) {
        let data = JSON.parse(localStorage.getItem("NOTES"))
        data = data.filter(element => element.id !== id);
        localStorage.setItem('NOTES', JSON.stringify(data));
        window.location.reload();
    }
    return (
        <div className="note-item">
            <h3 className="note-title">{judul}</h3>
            <p className="note-desc">{desk}</p>
            <button onClick={() => deleteNote(id)}>X</button>
        </div>
    );

}

export default NoteItem;