import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase.utils";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

function AddTodo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState("");
  const [editTodoText, setEditTodoText] = useState("");

  // function to retrieve data from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.timestamp,
        });
      });
      console.log(todosArray, "todosArray");
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);
  console.log(todos, "todos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {
      await addDoc(collection(db, "todos"), {
        todos: input,
        timestamp: serverTimestamp(),
      });
    }
    setInput("");
  };

  const deleteTodo = async (id) => {
    // Delete todo from Firebase
    try {
      await deleteDoc(doc(db, "todos", id));
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  const updateTodo = async (id) => {
    // Update todo in Firebase
    try {
      await updateDoc(doc(db, "todos", id), {
        todos: editTodoText,
      });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, todos: editTodoText } : todo
      );
      console.log(updatedTodos, "updatedTodos");
      setTodos(updatedTodos);
      setEditTodoId("");
      setEditTodoText("");
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  const openEditTodo = (id, text) => {
    setInput("");
    setEditTodoId(id);
    setEditTodoText(text);
    // setTodos(text);
  };

  return (
    <div className="App">
      <div className="card">
        <h1>TODO LIST</h1>
        <form className="input-group-mb-3">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Add Todo
          </button>
        </form>
      </div>
      <div className="card">
        <table
          className="table"
          style={{
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TODO</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => {
              return (
                <tr key={idx}>
                  <td>{todo.id} </td>
                  <td>
                    {editTodoId === todo.id ? (
                      <input
                        type="text"
                        value={editTodoText}
                        onChange={(e) => setEditTodoText(e.target.value)}
                      />
                    ) : (
                      todo.todos
                    )}
                  </td>
                  <td>
                    {editTodoId === todo.id ? (
                      <button onClick={() => updateTodo(todo.id)}>Save</button>
                    ) : (
                      <button onClick={() => openEditTodo(todo.id, todo.todos)}>
                        Edit
                      </button>
                    )}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    {/* <button
                      className="btn btn-success"
                      onClick={() => updateTodo(todo.id, "Updated Text")}
                    >
                      Update
                    </button> */}
                    {/* </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddTodo;
