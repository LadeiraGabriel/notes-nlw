import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

type Note = {
  id: string;
  date: Date;
  content: string;
};

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesInStore = localStorage.getItem("notes");
    if (notesInStore) {
      return JSON.parse(notesInStore);
    }
    return [];
  });
  const [search, setSearch] = useState("");

  function CreateNewNote(note: Note) {
    const addNote = [note, ...notes];
    setNotes(addNote);
    localStorage.setItem("notes", JSON.stringify(addNote));
  }

  function deleteNoteById(id: string) {
    const notesWithoutNoteofId = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesWithoutNoteofId);
    localStorage.setItem("notes", JSON.stringify(notesWithoutNoteofId));
  }

  function handleSearchNote(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  const filterSeachNotes =
    search !== ""
      ? notes.filter((note) => note.content.includes(search))
      : notes;
  return (
    <>
      <div className="m-16  2xl:mx-96  space-y-6">
        <img className="w-32" src={logo} alt="NLW Expert" />
        <form>
          <input
            onChange={handleSearchNote}
            className="bg-slate-900 outline-none md:text-3xl
            placeholder:text-slate-500 
            placeholder:font-semibold w-full antialiased
            "
            type="text"
            placeholder="Busque em suas notas... "
          />
        </form>
        <div className="border border-spacing-1 border-slate-700 " />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NewNoteCard CreateNewNote={CreateNewNote} />
          {filterSeachNotes.map((note) => (
            <NoteCard key={note.id} note={note} deleteNote={deleteNoteById} />
          ))}
        </div>
      </div>
    </>
  );
}
