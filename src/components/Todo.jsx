import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  complete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer text-sm`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  delete: `hover:text-[#F64740]`,
};

const Todo = ({ todo }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo}</p>
      </div>
      <button>
        <FaRegTrashAlt className={style.delete} />
      </button>
    </li>
  );
};

export default Todo;
