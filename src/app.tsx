import logo from "./assets/logo-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <>
      <div className="m-16 space-y-6">
        <img className="w-32" src={logo} alt="NLW Expert" />
        <form>
          <input
            className="bg-slate-900 outline-none text-3xl
            placeholder:text-slate-500 
            placeholder:font-semibold  w-full 
            "
            type="text"
            placeholder="Busque em suas notas... "
          />
        </form>
        <div className="border border-spacing-1 border-slate-700 " />

        <div className="grid grid-cols-3 gap-6">
          <NewNoteCard />
          <NoteCard />
        </div>
      </div>
    </>
  );
}
