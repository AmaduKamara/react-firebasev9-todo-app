import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#477998] to-[#F64740]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-700 p-2`,
  form: `flex justify-between mt-4`,
  input: `border p-2 w-full text-xl focus:outline-[#F64740]`,
  button: `border p-4 ml-2 bg-[#F64740] text-slate-100`,
  count: `text-center  p-2`,
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
