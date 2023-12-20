import React, { memo } from "react";
import styled from "styled-components";

type test = {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

//function TodoForm({ content, handleChange, handlerSubmit }: test) {
function TodoForm({ content, handleChange, handlerSubmit }: test) {
  console.log("form render");
  return (
    <Div>
      <form onSubmit={handlerSubmit}>
        <Input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <Button type="submit">등록</Button>
      </form>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 20px;
  width: 400px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  color: ${(props) => props.color || "#fefefe"};
  border: 0;
  background: #1e7fc0;
  border-radius: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 255px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
`;

export default memo(TodoForm);
