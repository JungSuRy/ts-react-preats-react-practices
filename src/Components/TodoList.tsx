import React from "react";
import { todoProps } from "../App";

function TodoList({ todos }: { todos: todoProps[] }) {
  console.log(todos);
  return (
    <div>
      <ul>
        <li>Ract학습</li>
        <li>Typescript 학습</li>
      </ul>
    </div>
  );
}

export default TodoList;
