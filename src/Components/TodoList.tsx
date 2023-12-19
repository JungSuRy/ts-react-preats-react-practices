import React, { memo } from "react";
import { todoProps } from "../App";

type Listprops = {
  todos: todoProps[];
  handlerToggle: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => void;
};

function TodoList({ todos, handlerToggle }: Listprops) {
  console.log("list render");
  return (
    <div>
      {todos.length !== 0 ? (
        <ul>
          {todos.map((todo) => (
            //<li key={todo.id} onClick={handlerToggle.bind(null, todo.id)}>
            <li
              key={todo.id}
              onClick={(event) => handlerToggle(event, todo.id)}
              className={todo.toggle ? "todoLine" : "NonLine"}
            >
              <span>{todo.content}</span>
            </li>
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

export default memo(TodoList);
