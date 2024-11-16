import React from "react";
import { showFormattedDate } from '../utils/data';
function NoteItem({ note }) {

    return (
        <div className="card m-5 p-5 note-item">
            <h1 className="card-content has-text-centered has-text-weight-bold is-underlined is-size-5">{note.title}</h1>
            <p className="note-body has-text-primary mb-2">{note.body}</p>
            <p className="createdAt mb-2">posted at : {showFormattedDate(note.createdAt)}</p>
            <div className="has-text-right">
                <button className="button is-primary note-archieved">archieved</button>
            </div>
        </div>
    );

}

export default NoteItem;