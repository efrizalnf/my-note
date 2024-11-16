import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { getInitialData } from '../utils/data';
import autoBind from 'react-autobind';
import AppBody from "../component/Body";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unarchieved: getInitialData()
    }
    autoBind(this);
  }

  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== '') {
      this.setState({
        notes: this.state.unarchieved.filter(note => note.title.toLowerCase().includes(text.toLowerCase())),
      })
    } else {
      this.setState({
        notes: this.state.notes,
      })
    }
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
  render() {
    return (
    <>
        <Header onSearch={this.onSearchHandler} />
        <AppBody notes={this.state.notes} addNewNote={this.addNewNoteHandler} onArchive={this.onArchiveHandler} />
        <Footer/>
    </>
    );
  }
}

export default Home;
