import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNoteCreate from "./NewNoteCreate";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNoteBlock) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNoteBlock];
    });
  }

  function deleteNote(blockID) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteBlock, index) => {
        return index !== blockID;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewNoteCreate onAdd={addNewNote} />

      {notes.map((noteBlock, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteBlock.title}
            content={noteBlock.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
