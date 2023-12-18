import React from "react";
import { todoProps } from "../App";

function TodoList({ todos }: { todos: todoProps[] }) {
  console.log(todos);
  return (
    <div>
      {todos.length !== 0 ? (
        <ul>
          {todos.map((todo) => (
            <li>{todo.content}</li>
          ))}
        </ul>
      ) : (
        <div>
          <span>등록된 일정이 없습니다.</span>
        </div>
      )}
    </div>
  );
}

export default TodoList;
