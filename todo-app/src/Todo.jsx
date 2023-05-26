import { useState } from "react";
import { AiFillDelete, AiFillCheckCircle, AiFillEdit } from "react-icons/ai";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newInput, setNewInput] = useState(todo.input);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewInput(todo.title);
    } else {
      todo.title = "";
      setNewInput(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newInput : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <AiFillCheckCircle id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newInput)}
        >
          <AiFillEdit id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete id="i" />
        </button>
      </div>
    </div>
  );
}
