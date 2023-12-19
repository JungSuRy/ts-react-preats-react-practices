import React, { memo } from "react";

type test = {
  content: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlerSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function TodoForm({ content, handleChange, handlerSubmit }: test) {
  console.log("form render");
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default TodoForm;
