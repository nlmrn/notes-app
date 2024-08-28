import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, onDelete }) => (
  <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {notes.map((note, index) => (
      <NoteCard id={note.id} key={index} note={note} onDelete={onDelete} />
    ))}
  </div>
);

export default NotesList;
