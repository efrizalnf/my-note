// import './App.css';
import React from "react";
import Header from "../component/Header";

import { getInitialData } from '../utils/data';
import autoBind from 'react-autobind';
import AppBody from "../component/Body";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      allnotes: getInitialData()
    }
    autoBind(this);
  }
  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== '') {
      this.setState({
        notes: this.state.allnotes.filter(note => note.title.toLowerCase().includes(text.toLowerCase())),
      })
    } else {
      this.setState({
        notes: this.state.allnotes,
      })
    }
  }
  addNewNoteHandler(newNoteData) {
    try {
      this.setState((prevState) => {
        return {
          notes: [newNoteData, ...prevState.notes,],
          allnotes: [newNoteData, ...prevState.allnotes,]
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
  render() {
    return (
    <>
        <Header onSearch={this.onSearchHandler} />
        <AppBody notes={this.state.notes} addNewNote={this.addNewNoteHandler}  />
    </>
    );
  }
}

export default Home;
