import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";

import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#477998] to-[#F64740] pt-16`,
  container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-700 p-2`,
  form: `flex justify-between mt-4`,
  input: `border p-2 w-full text-lg focus:outline-[#477998]`,
  button: `border p-4 ml-2 bg-[#477998] text-slate-100`,
  count: `text-center  p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault();

    if (inputText === "") {
      return alert("Please enter a valid todo");
    }

    await addDoc(collection(db, "todos"), {
      text: inputText,
      completed: false,
    });
    setInputText("");
  };

  // Read todo from firebase database
  useEffect(() => {
    const q = query(collection(db, "todos"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];

      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setTodos(todosArr);
    });

    return () => unsubscribe();
  }, []);

  // Update a firebase document
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete a firebase document

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>React Firebase-v9 Todo App</h1>
        <form className={style.form} onSubmit={createTodo}>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="Add todo"
            className={style.input}
          />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {todos.map((todo, idx) => (
            <Todo key={idx} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        {todos.length < 1 ? (
          <p className={style.count}>You have 0 todos</p>
        ) : (
          <p className={style.count}>You have {todos.length} todos</p>
        )}
      </div>
    </div>
  );
}

export default App;
