import { Dialog } from "@radix-ui/themes";
import { ArrowUpRight, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

type Note = {
  id: string;
  date: Date;
  content: string;
};

interface NewNoteCardProps {
  CreateNewNote(note: Note): void;
}
let recognition: SpeechRecognition | null;

export const NewNoteCard = ({ CreateNewNote }: NewNoteCardProps) => {
  const [isWritten, setWritten] = useState(false);
  const [isRecord, setRecord] = useState(false);
  const [content, setContent] = useState("");
  function shouldBeNotEmpty(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value === "") setWritten(false);
    setContent(event.target.value);
    console.log(event);
  }

  function handleCreateNewNote() {
    CreateNewNote({
      id: crypto.randomUUID(),
      date: new Date(),
      content: content,
    });
    toast.success("Nota criada com sucesso!");
  }

  function handleSaveWrittenNote() {
    handleCreateNewNote();
    setContent("");
    setWritten(false);
  }

  function handleStopRecord() {
    handleCreateNewNote();
    setRecord(false);
    if (recognition) {
      recognition.stop();
    }
    setWritten(false);
    setContent("");
  }

  function handleRecord() {
    setRecord(true);
    setWritten(true);
    setContent("");
    const isSpeechRecognitionAvaliable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
    if (!isSpeechRecognitionAvaliable) {
      alert("Infelizmente seu navegador não tem suporte para gravar!");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.maxAlternatives = 1;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const listLatters = Array.from(event.results).reduce((text, result) => {
        text += result[result.length - 1].transcript;

        return text;
      }, "" as string);

      setContent(listLatters);
    };

    recognition.onerror = (error) => {
      console.error(error);
    };

    recognition.start();
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button
            type="button"
            className="max-w-[350px] h-[250px] bg-slate-700
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
          className="bg-slate-700 fixed top-0 w-full h-full md:left-1/2 md:top-1/2
          md:right-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[640px] md:h-[600px]  rounded-md 
         p-5 text-sm flex flex-col
         overflow-hidden
         text-slate-400
         space-y-3
         outline-none
        
        "
        >
          <Dialog.Close
            className="size-8 bg-slate-800 
            absolute top-0 right-0 p-1.5
            "
            onClick={() => setWritten(false)}
          >
            <X size={10} />
          </Dialog.Close>
          <span className="text-slate-200 font-medium">Adicionar nota</span>
          {isWritten ? (
            <textarea
              onChange={shouldBeNotEmpty}
              className="bg-transparent
            outline-none
            resize-none
            h-full
            overflow-hidden
            "
              value={content}
            ></textarea>
          ) : (
            <p>
              Comece{" "}
              <button
                onClick={handleRecord}
                className="text-lime-300 cursor-pointer"
              >
                {" "}
                gravando uma nota
              </button>{" "}
              em áudio ou se preferir{" "}
              <button
                className="text-lime-300 cursor-pointer"
                onClick={() => {
                  setContent("");
                  setWritten(true);
                }}
              >
                utilize apenas texto.
              </button>
            </p>
          )}
          {isRecord ? (
            <Dialog.Close>
              <button
                onClick={handleStopRecord}
                type="button"
                className="absolute bottom-0 p-4
        font-medium text-sm self-center bg-slate-800 w-full "
              >
                <span className="bg-red-500 rounded-full size-3 inline-block animate-pulse" />
                {"  "} Gravando! (clique p/ interromper)
              </button>
            </Dialog.Close>
          ) : (
            <Dialog.Close>
              <button
                onClick={handleSaveWrittenNote}
                type="button"
                className="absolute bottom-0 p-4 text-lime-950 
            font-semibold text-sm self-center bg-lime-400 w-full"
              >
                Salvar nota
              </button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
