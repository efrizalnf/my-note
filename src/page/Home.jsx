import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { getInitialData } from '../utils/data';
import autoBind from 'react-autobind';
import AppBody from "../component/Body";
import Swal from "sweetalert2";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unarchieved: getInitialData(),
      queryFilter: '',
    }
    autoBind(this);
  }

  onSearchHandler(valueInput) {
    this.setState({
      queryFilter: valueInput,
    });
  }

  addNewNoteHandler(newNoteData) {
    try {
      this.setState((prevState) => {
        return {
          notes: [newNoteData, ...prevState.notes,],
          unarchieved: [newNoteData, ...prevState.unarchieved,]
        }
      })
      return {
        error: false,
        message: 'Success!'
      }
    }
    catch (error) {
      return {
        error: true,
        message: 'Failed!'
      }
    }
  }

  onArchiveHandler(id) {
    const noteToModify = this.state.unarchieved.filter(note => note.id === id)[0];
    const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.filter(note => note.id !== id),
          modifiedNote
        ],
        unarchieved: [
          ...prevState.unarchieved.filter(note => note.id !== id),
          modifiedNote
        ],
      }
    });
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30D6ACFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState((prevState) => {
          return {
            notes: prevState.notes.filter(note => note.id !== id),
            unarchieved: prevState.unarchieved.filter(note => note.id !== id)
          }
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

  render() {
    const filteredNotes = this.state.notes.filter((notes) =>
      notes.title.toLowerCase().includes(this.state.queryFilter.toLowerCase())
    )
    return (
    <>
        <Header onSearch={this.onSearchHandler} />
        <AppBody notes={filteredNotes} addNewNote={this.addNewNoteHandler} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        <Footer/>
    </>
    );
  }
}

export default Home;
