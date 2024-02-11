export const NoteCard = () => {
  return (
    <button
      type="button"
      className="max-w-[350px] max-h-[250px]
       bg-slate-800 rounded-md text-sm p-5 
       space-y-3 text-left flex flex-col  
       overflow-hidden relative focus:outline-none focus:ring ring-lime-300 focus:border-lime-300
       "
    >
      <span>há 2 dias</span>
      <p className="text-slate-400 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quos
        fugit fugiat voluptatibus, nobis iste quas repudiandae provident, nisi
        numquam rem, cumque fuga. Doloribus officiis ullam voluptates laudantium
        amet animi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur quos fugit fugiat voluptatibus, nobis iste quas repudiandae
        provident, nisi numquam rem, cumque fuga. Doloribus officiis ullam
        voluptates laudantium amet animi?
      </p>
      <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 top-1/2" />
    </button>
  );
};
