import React, { useState } from "react";
import AddNote from "./AddNote";
import NoteLists from "./NoteLists";
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px'
    },
};
Modal.setAppElement('#modal-input');
const Body = ({ notes, addNewNote, onDelete, onArchive }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="note-body">
            <h1 className="has-text-primary has-text-centered has-text-weight-bold is-size-1">Note Lists</h1>
            <div className="has-text-right mr-5">
                <button className="button is-primary note-body__add-note-button" onClick={openModal}>Write note</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
            >
                <AddNote addNewNote={addNewNote} closeModal={closeModal} />
            </Modal>
            <Tabs className="m-3">
                <TabList>
                    <Tab>My Notes</Tab>
                    <Tab>Archieved</Tab>
                </TabList>

                <TabPanel>
                    <NoteLists notes={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
                </TabPanel>
                <TabPanel>
                    <NoteLists notes={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Body;