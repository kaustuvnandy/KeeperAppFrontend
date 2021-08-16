import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import api from "../api"

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        await api
            .retrieveNote()
            .then(notes => {
                setNotes(notes.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    fetchData()
  }, [])


  async function addNote(newNote){
    await api
      .createNote(newNote)
      .then(res => {
        setNotes(prevNotes => {
          return [...prevNotes, res.data.data]
        })
        alert("Note Added")
      })
      .catch(error => {
      console.log(error)
      })
  }

  function deleteNote(id) {
    if (window.confirm("Are you sure you want to delete note from list?")){
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return noteItem._id !== id;
        });
      });
      api.deleteNoteById(id)
    }
  }

  async function updateNote(id, note){
    await api
    .updateNoteById(id, note)
    .then(res => {
      alert("Note updated successfully")
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem) =>
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onUpdate={updateNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
