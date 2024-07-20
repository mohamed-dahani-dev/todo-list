import { useEffect, useRef } from "react";
import ListItems from "./ListItems";
import { useState } from "react";

const TodoList = () => {
  const [todoList, seTtodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const inputRef = useRef();

  // add todo
  const add = () => {
    const inputText = inputRef.current.value.trim();

    // validation
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplet: false,
    };

    // add the new data in in array
    seTtodoList((prev) => [...prev, newTodo]);

    // clear the input when you add todo
    inputRef.current.value = "";
  };

  // delete todo
  const deleteTodo = (id) => {
    seTtodoList((prev) => {
      return prev.filter((todoList) => todoList.id !== id);
    });
  };

  // mark todo
  const toggle = (id) => {
    seTtodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplet: !todo.isComplet };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    // save in local storage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-slate-200 w-2/4 min-h-96 rounded-xl p-9 max-xl:w-2/3 max-lg:w-[80%] max-md:w-[90%]">
      <div className="flex flex-col gap-10 mb-10">
        <div className="flex items-center gap-4 text-3xl">
          <span className="icon-clipboard"></span>
          <h1 className="font-bold">Todo List</h1>
        </div>
        <div className="flex justify-center">
          <input
            ref={inputRef}
            type="text"
            className="rounded-l-full p-4 outline-none text-base w-80"
          />
          <button
            className="icon-plus bg-orange-600 text-white py-3 px-10 rounded-r-full font-semibold text-center"
            onClick={add}
          ></button>
        </div>
      </div>

      {/* mapping the array */}
      {todoList.map((item, index) => {
        return (
          <ListItems
            key={index}
            id={item.id}
            isComplet={item.isComplet}
            text={item.text}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
