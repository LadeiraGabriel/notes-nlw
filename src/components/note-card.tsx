import { Dialog } from "@radix-ui/themes";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

type Note = {
  id: string;
  date: Date;
  content: string;
};

interface NoteCardProps {
  note: Note;
  deleteNote: (id: string) => void;
}

export const NoteCard = ({ note, deleteNote }: NoteCardProps) => {
  function hadleDeleteNote() {
    deleteNote(note.id);
  }
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button
            type="button"
            className="max-w-[350px] h-[250px]
       bg-slate-800 rounded-md text-sm p-5 
       space-y-3 text-left flex flex-col  
       overflow-hidden relative focus:outline-none focus:ring ring-lime-300 focus:border-lime-300
       "
          >
            <span>
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-slate-400 ">{note.content}</p>
            <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 top-1/2" />
          </button>
        </Dialog.Trigger>

        <Dialog.Content
          className="bg-slate-700 fixed top-0 md:left-1/2 md:top-1/2
          md:right-1/2 md:-translate-x-1/2 md:-translate-y-1/2
          w-full h-full md:w-[640px] md:h-[600px]  rounded-md 
         p-5 text-sm flex flex-col  space-y-3
         overflow-hidden
         text-slate-200
        "
        >
          <Dialog.Close
            className="size-8 bg-slate-800 
            absolute top-0 right-0 p-1.5
            "
          >
            <X size={10} />
          </Dialog.Close>
          <span className=" font-medium">
            {formatDistanceToNow(note.date, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          <p className="font-light">{note.content}</p>

          <button
            type="button"
            className="absolute bottom-0 p-4 text-slate-300 
            font-medium text-sm self-center bg-slate-800 w-full group"
            onClick={hadleDeleteNote}
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
