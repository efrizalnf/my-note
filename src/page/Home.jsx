// import './App.css';
import React from "react";
import Header from "../component/Header";
import NoteList from '../component/NoteLists'
import "../Home.css";
import { getInitialData } from '../utils/data';
import autoBind from 'react-autobind';
import AddNote from "../component/AddNote";

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
  render() {
    return (
    <>
      <AddNote />
        <Header onSearch={this.onSearchHandler} />
        <NoteList notes={this.state.notes}   />
    </>
    );
  }
}

export default Home;
