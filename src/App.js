import React, { useState } from 'react';
import './App.css';

// Komponent Note reprezentuje indywidualną notatkę z tytułem i opisem
const Note = ({ note, onEdit, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Przełącza widoczność opisu notatki
  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h3 onClick={toggleDescription}>{note.title}</h3>
      {isVisible && (
        <div>
          <p>{note.description}</p>
          <button onClick={() => onEdit(note.id)}>Edytuj</button>
          <button onClick={() => onDelete(note.id)}>Usuń</button>
        </div>
      )}
    </div>
  );
};

// NotesList to kontener na komponenty Note
const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Pierwsza notatka', description: 'Bajo jajo bajo jajo' },
    { id: 2, title: 'Druga notatka', description: '53.14079631543677, 23.16900463548845' },
    { id: 3, title: 'Trzecia notatka', description: '' },
    { id: 4, title: 'Czwarta notatka', description: 'abcddsf' },
  ]);

  const Edit = (id) => {
    // Tu powinna być logika do edytowania notatki, ale nie mam pojęcia jak to zrobić XDDD
  };

  // Usuwa notatkę (Pojawia się spowrotem po odświeżeniu strony jak coś)
  const Delete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Super Wypasiony System Notatek 5000</h1>
      <NotesList notes={notes} onEdit={Edit} onDelete={Delete} />
    </div>
  );
};

export default App;