import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  });
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
          {todos.map((todo) => (
            <li className="list-items" key={todo.id}>
              <div className="list-item-list">{todo.text}</div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                />
                <FiEdit className="list-item-icons" id="edit" title="Edit" />
                <MdDelete
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
