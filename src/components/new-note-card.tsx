import { ArrowUpRight } from "lucide-react";

export const NewNoteCard = () => {
  return (
    <button
      type="button"
      className="max-w-[350px] max-h-[250px] bg-slate-700 rounded-md 
      text-sm p-5 space-y-3 text-left flex flex-col overflow-hidden
      focus:outline-none focus:ring ring-lime-300 focus:border-lime-300
      "
    >
      <div className="size-8 self-end -m-5 bg-slate-800 p-1.5">
        <ArrowUpRight size={20} />
      </div>

      <span>Adicionar nota</span>
      <p className="text-slate-400 ">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  );
};
