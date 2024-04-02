import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'YES! I guess i\'m beginning to understand the whole react concept',
      date: 29 / 3 / 2024,
    },
    {
      id: nanoid(),
      text: 'Not me beginning to feel so proud of myself at the moment. Lol',
      date: 30 / 3 / 2024,
    },
    {
      id: nanoid(),
      text: 'Such an eye opener!',
      date: 31 / 3 / 2024,
    },
    {
      id: nanoid(),
      text: 'Practice, they say makes one perfect',
      date: 31 / 3 / 2024,
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />

    </div>
  );
};

export default App;
