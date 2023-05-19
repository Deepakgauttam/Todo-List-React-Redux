// AddTodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTodoTitle("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Enter todo title"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
