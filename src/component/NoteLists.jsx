import React from "react";
import NoteItem from "./NoteItem";

function NoteLists({ notes}) {
    
    return (
        <>
            <div className="NoteLists">
                <h1 className="has-text-primary has-text-centered has-text-weight-bold is-size-1">Note Lists</h1>
                {
                    notes.length === 0 ? <p className="has-text-centered has-text-weight-bold is-size-5 m-5">Tidak ada catatan</p> : notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                        />
                    ))
                }
            </div>
        </>
    );
    
}

export default NoteLists;