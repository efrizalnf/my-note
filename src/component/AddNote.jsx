import React, { useState } from "react";
import Swal from "sweetalert2";

function AddNote({ addNewNote, closeModal }) {
    const [formData, setFormData] = useState({
        title: '',
        noteBody: '',
    });

    const onTitleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 50) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            })
        }
    }

    const handleSubmit = (e) => {
        let timerInterval
        Swal.fire({
            title: 'Saving note',
            html: 'Proses simpan dalam <b></b> detik.',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                inputNote();
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
        })
        e.preventDefault();
    }

    const inputNote = async (data) => {
        try {
            const data = {
                id: +new Date(),
                title: formData.title,
                body: formData.noteBody,
                archived: false,
                createdAt: new Date(),
            }
            addNewNote(data);
            setFormData({
                ...formData,
                title: '',
                noteBody: '',
            })
            closeModal();
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Mohon maaf',
                text: 'Data gagal disimpan',
                footer: err
            })
        }
        return data
    }

    return (
        <>
            <div className="fr-add">
                <form action="post" onSubmit={handleSubmit}>
                    <input name="title" placeholder="Please input title of note" type="text" className="input mb-2 title-input" value={formData.title} onChange={onTitleChange} required /><br />
                    <textarea name="noteBody" placeholder="Please input Description of note" type="text" className="textarea desc-input" rows="10" value={formData.noteBody} onChange={onBodyChange} required /><br />
                    <button className="button is-primary submit-note" type="submit">Add Note</button>
                </form>
            </div>
        </>
    );
}

export default AddNote;