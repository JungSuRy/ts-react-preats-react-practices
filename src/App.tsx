import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoData from "./data/todos";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoFom";

//import Gallery from "./Components/Gallery";
//import images_data from "./data/images";

//const images = images_data;

export interface todoProps {
  id: number;
  content: string;
  toggle: boolean;
}

function App() {
  const [todos, setTodo] = useState<todoProps[]>([]);
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let maxTodo: todoProps = { id: 0, content: "", toggle: false };

    if (todos.length !== 0) {
      maxTodo = todos.reduce((prev, value) => {
        return prev.id >= value.id ? prev : value;
      });
    }

    const maxid = todos.length === 0 ? 1 : maxTodo.id + 1;

    setTodo([...todos, { id: maxid, content: content, toggle: false }]);
  };

  const handlerToggle = (id: number) => {
    const modify_todo = todos.map((todo, id) => {
      if (todo.id === id) {
        todo.toggle = !todo.toggle;
        return todo;
      } else {
        return todo;
      }
    });

    setTodo(modify_todo);
  };

  return (
    <div className="App">
      <TodoList todos={todos} />
      <TodoForm
        content={content}
        handleChange={handleChange}
        handlerSubmit={handlerSubmit}
      />
      {/*<Gallery images={images}>갤러리 테스트</Gallery> 갤러리 앱*/}
    </div>
  );
}

export default App;
