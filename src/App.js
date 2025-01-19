import React, { useState } from 'react';
import './App.css';
import './Modal.css';
import './note.css';

// Komponent Note reprezentuje indywidualną notatkę z tytułem i opisem
const Note = ({ title, description, note, onEdit, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Przełącza widoczność opisu notatki
  const toggleDescription = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div class="notes">
      <h3 class="notetxt" onClick={toggleDescription}>{title}</h3>
      {isVisible && (
        <div class="desc">
          <p>{description}</p>
          <button onClick={onEdit}>Edytuj</button>
          <button onClick={onDelete}>Usuń</button>
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

const Modal = ({ isOpen, onClose, onSave, initialTitle, initialDescription }) => {
  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescription);

  const noteSave = () => {
    onSave(title, description);
    onClose();
  };
  
  React.useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
  }, [initialTitle, initialDescription, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edytuj {initialTitle}</h2>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{marginBottom: '10px', width: '100%'}}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{marginBottom: '10px', width:'100%'}}
          />
        </label>
        <div>
          <button onClick={noteSave} style={{cursor: 'pointer'}}>Zapisz</button>
          <button onClick={onClose} style={{cursor: 'pointer', marginLeft:'10px'}}>Anuluj</button>
        </div>
      </div>
    </div>
  );
};



const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Pierwsza notatka', description: 'Bajo jajo bajo jajo' },
    { id: 2, title: 'Druga notatka', description: '53.14079631543677, 23.16900463548845' },
    { id: 3, title: 'Trzecia notatka', description: 'https://github.com/SomeAlienBoi69/React' },
    { id: 4, title: 'Czwarta notatka', description: 'abcddsf' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');

  const openModal = (id, title, description) => {
    setCurrentNoteId(id);
    setCurrentTitle(title);
    setCurrentDescription(description);
    setIsModalOpen(true);
  };

  const saveNote = (newTitle, newDescription) => {
    if (newTitle !== '') {
    TitleChange(currentNoteId, newTitle);
    }
    if (newDescription !== '') {
    DescriptionChange(currentNoteId, newDescription);
    }
    setIsModalOpen(false);
  };

  const TitleChange = (id, newTitle) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  };

  const DescriptionChange = (id, newDescription) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, description: newDescription } : note
      )
    );
  };

  // Usuwa notatkę (Pojawia się z powrotem po odświeżeniu strony)
  const Delete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>  
    {notes.map(note => (
      <Note
        key={note.id}
        title={note.title}
        description={note.description}
        onDelete={() => Delete(note.id)}
        onEdit={() => openModal(note.id, note.title, note.description)}
      />
    ))}
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSave={saveNote}
      initialTitle={currentTitle}
      initialDescription={currentDescription}
    />
  </div>
  );
  
};

export default App;