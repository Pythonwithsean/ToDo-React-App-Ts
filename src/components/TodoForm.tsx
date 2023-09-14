import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>ToDo Form</label>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="What is there to do today?"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
