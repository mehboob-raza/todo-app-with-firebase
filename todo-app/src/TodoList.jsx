// import { useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase configuration
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");
//   const [editTodoId, setEditTodoId] = useState("");
//   const [editTodoText, setEditTodoText] = useState("");

//   // useEffect(() => {
//   //   // Fetch todo list data from Firebase
//   //   const fetchTodos = async () => {
//   //     try {
//   //       const snapshot = await getDocs(collection(db, "todos"));
//   //       const todosData = snapshot.docs.map((doc) => ({
//   //         id: doc.id,
//   //         ...doc.data(),
//   //       }));
//   //       setTodos(todosData);
//   //     } catch (error) {
//   //       console.error("Error fetching todos: ", error);
//   //     }
//   //   };

//   //   fetchTodos();
//   // }, []);

//   const addTodo = async (e) => {
//     e.preventDefault();

//     // Add new todo to Firebase
//     try {
//       const docRef = await addDoc(collection(db, "todos"), {
//         text: newTodo,
//       });
//       setTodos([...todos, { id: docRef.id, text: newTodo }]);
//       setNewTodo("");
//     } catch (error) {
//       console.error("Error adding todo: ", error);
//     }
//   };

//   const deleteTodo = async (id) => {
//     // Delete todo from Firebase
//     try {
//       await deleteDoc(doc(db, "todos", id));
//       const updatedTodos = todos.filter((todo) => todo.id !== id);
//       setTodos(updatedTodos);
//     } catch (error) {
//       console.error("Error deleting todo: ", error);
//     }
//   };

//   const updateTodo = async (id) => {
//     // Update todo in Firebase
//     try {
//       await updateDoc(doc(db, "todos", id), {
//         text: editTodoText,
//       });
//       const updatedTodos = todos.map((todo) =>
//         todo.id === id ? { ...todo, text: editTodoText } : todo
//       );
//       setTodos(updatedTodos);
//       setEditTodoId("");
//       setEditTodoText("");
//     } catch (error) {
//       console.error("Error updating todo: ", error);
//     }
//   };

//   const openEditTodo = (id, text) => {
//     setEditTodoId(id);
//     setEditTodoText(text);
//   };

//   return (
//     <div>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button type="submit">Add Todo</button>
//       </form>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {editTodoId === todo.id ? (
//               <input
//                 type="text"
//                 value={editTodoText}
//                 onChange={(e) => setEditTodoText(e.target.value)}
//               />
//             ) : (
//               todo.text
//             )}
//             {editTodoId === todo.id ? (
//               <button onClick={() => updateTodo(todo.id)}>Save</button>
//             ) : (
//               <button onClick={() => openEditTodo(todo.id, todo.text)}>
//                 Edit
//               </button>
//             )}
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
