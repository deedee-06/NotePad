import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';
import { MdSpaceBar } from 'react-icons/md';

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

  const [darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState('');

  // To retrieve data from the local storage

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    // This would only run if the there's a saved note, else it would
    // the 'if else' condtion
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  
  // to save the file in the local storage, so that when the page
  // is reloaded, saved notes by the user will be displayed as well
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={searchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />

      </div>
    </div>
  );
};

export default App;
