import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoFom";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
