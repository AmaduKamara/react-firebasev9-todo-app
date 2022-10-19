import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#477998] to-[#F64740]`,
};

function App() {
  const [todos, setTodos] = useState([
    "Learn react",
    "Learn NodeJS for API development",
  ]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>React Firebase-v9 Todo App</h1>
        <form className={style.form}>
          <input type="text" placeholder="Add todo" className={style.input} />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {todos.map((todo, idx) => (
            <Todo key={idx} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have {todos.length} todos</p>
      </div>
    </div>
  );
}

export default App;
