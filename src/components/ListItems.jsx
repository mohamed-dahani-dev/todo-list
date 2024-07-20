/* eslint-disable react/prop-types */
const ListItems = ({ id, text, isComplet, deleteTodo, toggle }) => {
  return (
    <div
      className="flex justify-between items-center mb-3 cursor-pointer bg-slate-300 py-2 px-5 rounded-full" 
      onClick={() => {
        toggle(id);
      }}
    >
      <div className="flex gap-4 items-center">
        {/* <span className="icon-verified text-sky-400 text-xl"></span> */}
        <span className={`${isComplet ? "icon-verified text-sky-400 text-xl" : "w-5 h-5 rounded-full border-2 border-sky-400"}`}></span>
        <p
          className={`text-lg font-medium text-slate-900 decoration-slate-900 ${
            isComplet ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <span
        className="icon-close text-red-600 text-2xl"
        onClick={() => {
          deleteTodo(id);
        }}
      ></span>
    </div>
  );
};

export default ListItems;
