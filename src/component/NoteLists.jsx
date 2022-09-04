import React, { useState } from "react";
import NoteItem from "./NoteItem";
import Data from '../data/Data'

function NoteLists () {
    const [dataNote, setDataNote] = useState([]);
    const data = Data.getAllNotes();
    console.log(data)
    function deleteNote(id) {
        data = data.filter(element => element.id !== id);
        localStorage.setItem('reptiles', JSON.stringify(data));
    }
    return(
        <>
            <div className="NoteLists">
                <h1>Note Lists</h1>
                { data &&
                    data.map(itemnote => (
                        <NoteItem judul={itemnote.title} desk={itemnote.desc} id={itemnote.id}/>
                    ))
                }
            </div>
        </>
    );
    
}

export default NoteLists;