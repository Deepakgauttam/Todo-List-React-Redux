// App.js
import React from "react";
import "./app.css";
import AddTodoForm from "./redux/components/AddTodoForm";
import TodoList from "./redux/components/TodoList";

const App = () => {
  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
