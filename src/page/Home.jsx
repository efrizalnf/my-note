// import './App.css';
import { React } from "react";
import AddNote from "../component/AddNote";
import NoteList from '../component/NoteLists'
import "../Home.css";


function Home() {
  return (
    <>
      <AddNote />
      <NoteList />
    </>
  );
}

export default Home;
