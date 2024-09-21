// src/components/Notes.js
import React, { useState } from 'react';
import './Notes.css';

function Notes() {
  const [notes, setNotes] = useState('');
  
  return (
    <div className="notes">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Take a note..."
      ></textarea>
    </div>
  );
}

export default Notes;
