import React, { memo } from "react";
import { todoProps } from "../App";
import styled from "styled-components";

type Listprops = {
  todos: todoProps[];
  handlerToggle: (id: number) => void;
};

//function TodoList({ todos, handlerToggle }: Listprops) {
const TodoList = React.memo(function TodoList({
  todos,
  handlerToggle,
}: Listprops) {
  console.log("list render");
  return (
    <Div>
      {todos.length !== 0 ? (
        <ul>
          {todos.map((todo) => (
            //<li key={todo.id} onClick={handlerToggle.bind(null, todo.id)}>
            <Li
              key={todo.id}
              onClick={() => handlerToggle(todo.id)}
              className={todo.toggle ? "todoLine" : "NonLine"}
            >
              <span>{todo.content}</span>
            </Li>
          ))}
        </ul>
      ) : (
        <div>
          <span>등록된 일정이 없습니다.</span>
        </div>
      )}
    </Div>
  );
});

const Div = styled.div`
  height: 600px;
  width: 400px;
  border: 1px solid #666363;
  border-radius: 10px;
`;

const Li = styled.li`
  font-size: 20pt;
`;

export default TodoList;
