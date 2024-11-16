import React, { useState } from "react";
import Swal from "sweetalert2";

function AddNote() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        let timerInterval
        Swal.fire({
            title: 'Save note',
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
                window.location.reload();
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
            const datas = {
                id: +new Date(),
                title: title,
                desc: desc
            }
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
                <h1>My Note - My Adventure</h1>
                <form action="post" onSubmit={handleSubmit}>
                    <input placeholder="Please input title of note" type="text" className="title-input" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
                    <textarea placeholder="Please input Description of note" type="text" className="desc-input" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)} required /><br />
                    <button  className="button is-primary submit-note" type="submit">Add Note</button>
                </form>
            </div>
        </>
    );
}

export default AddNote;