import { useState } from "react";
import logo from "./assets/logo-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

type Note = {
  id: string;
  date: Date;
  content: string;
};

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function CreateNewNote(note: Note) {
    setNotes([note, ...notes]);
  }

  function deleteNoteById(id: string) {
    const notesWithoutNoteofId = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesWithoutNoteofId);
  }
  return (
    <>
      <div className="m-16 space-y-6">
        <img className="w-32" src={logo} alt="NLW Expert" />
        <form>
          <input
            className="bg-slate-900 outline-none text-3xl
            placeholder:text-slate-500 
            placeholder:font-semibold  w-full antialiased
            "
            type="text"
            placeholder="Busque em suas notas... "
          />
        </form>
        <div className="border border-spacing-1 border-slate-700 " />

        <div className="grid grid-cols-3 gap-6">
          <NewNoteCard CreateNewNote={CreateNewNote} />
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNoteById} />
          ))}
        </div>
      </div>
    </>
  );
}
