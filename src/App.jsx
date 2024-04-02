import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid (),
      text: 'YES! I guess i\'m beginning to understand the whole react concept',
      date: 29 / 3 / 2024,
    },
    {
      id: nanoid (),
      text: 'Not me beginning to feel so proud of myself at the moment. Lol',
      date: 30 / 3 / 2024,
    },
    {
      id: nanoid(),
      text: 'Such an eye opener!',
      date: 31 /3/2024,
    },
    {
      id: nanoid(),
      text: 'YES! I guess i\'m beginning to understand the whole react concept',
      date: 31/3/2024,
    }
  ])
  return (
    <div className='container'>
      <NotesList notes={ notes} />

    </div>
  );
};

export default App;
