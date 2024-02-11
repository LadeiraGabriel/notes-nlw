import { Dialog } from "@radix-ui/themes";
import { ArrowUpRight, X } from "lucide-react";

export const NewNoteCard = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button
            type="button"
            className="max-w-[350px] max-h-[250px] bg-slate-700
             rounded-md text-sm p-5 space-y-3 text-left flex flex-col 
             overflow-hidden focus:outline-none focus:ring
              ring-lime-300 focus:border-lime-300 relative
      "
          >
            <div className="size-8 self-end absolute right-0 top-0  bg-slate-800 p-1.5">
              <ArrowUpRight size={20} />
            </div>

            <span>Adicionar nota</span>
            <p className="text-slate-400 ">
              Grave uma nota em áudio que será convertida para texto
              automaticamente.
            </p>
          </button>
        </Dialog.Trigger>
        <Dialog.Content
          className="bg-slate-700 absolute
        top-4 w-[640px] h-[600px]  rounded-md 
         p-5 text-sm flex flex-col
         overflow-hidden
        "
        >
          <Dialog.Close
            className="size-8 bg-slate-800 
            absolute top-0 right-0 p-1.5
            "
          >
            <X size={10} />
          </Dialog.Close>
          <span className="text-slate-200 font-medium">Adicionar nota</span>
          <p className="text-slate-400 ">
            Comece gravando uma nota em áudio ou se preferir utilize apenas
            texto.
          </p>

          <button
            type="button"
            className="absolute bottom-0 p-4 text-lime-950 
            font-semibold text-sm self-center bg-lime-400 w-full"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
