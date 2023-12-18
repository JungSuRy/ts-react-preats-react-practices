import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoFom";
import Gallery from "./Components/Gallery";
import images_data from "./data/images";

const images = images_data;

function App() {
  return (
    <div className="App">
      {/*<TodoList />*/}
      {/*<TodoForm />*/}
      <Gallery images={images} />
    </div>
  );
}

export default App;
