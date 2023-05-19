import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const newTitle = prompt("Enter new title", todo.title);
    if (newTitle !== null && newTitle.trim() !== "") {
      dispatch(updateTodo({ ...todo, title: newTitle }));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <li>
      <div className="todo-list-item">
        <span>{todo.title}</span>
        <div className="todo-update-delete">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
