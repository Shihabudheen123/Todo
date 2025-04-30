import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputRef = useRef('null');
  useEffect(()=>{
    inputRef.current.focus();
  })
  return (
    <div className="container">
      <h2>Todo App</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          ref={inputRef}
          placeholder="Add a new task"
          className="form-control"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </form>
      <div className="list">
        <ul>
       {
        todos.map((todo)=>(
            <li>{todo}</li>
        ))
       }
        </ul>
      </div>
    </div>
  );
};

export default Todo;
