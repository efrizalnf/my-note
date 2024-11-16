import React from "react";
import NoteItem from "./NoteItem";

const NoteLists = ({ notes, onArchive, onDelete }) => {
    
    return (
        <>
            <div className="NoteLists">
                {
                    notes.length === 0 ? <p className="has-text-centered has-text-weight-bold is-size-5 m-5">Tidak ada catatan</p> : notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onArchive={onArchive}
                            onDelete={onDelete}
                        />
                    ))
                }
            </div>
        </>
    );
    
}

export default NoteLists;