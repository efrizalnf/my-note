import React from "react";
import { showFormattedDate } from '../utils/data';
function NoteItem({ note, onArchive, onDelete }) {
    const onArchiveActive = () => onArchive(note.id);
    const onDeleteActive = () => onDelete(note.id);
    return (
        <div className="card m-5 p-5 note-item">
            <h1 className="card-content has-text-centered has-text-weight-bold is-underlined is-size-5">{note.title}</h1>
            <p className="note-body has-text-primary mb-2">{note.body}</p>
            <p className="createdAt mb-2">writed at : {showFormattedDate(note.createdAt)}</p>
            <div className="has-text-right">
                {note.archieve === false ? <button className="button is-primary note-archieved" onClick={onArchiveActive}>❤️</button> : <button className="button is-warning note-archieved " onClick={onArchiveActive}>🤍</button>
                }
                <button className="button is-danger note-delete ml-2" onClick={onDeleteActive}>🗑️</button>
            </div>
        </div>
    );

}

export default NoteItem;