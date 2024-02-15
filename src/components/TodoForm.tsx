import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  type Todo = {
    id: string;
    todo: string;
    completed: boolean;
  };

  const [value, setValue] = useState("");
  let id = 0;

  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== "") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: value,
          completed: false,
        },
      ]);
    }

    setValue("");
  };

  const toggleID = () => {};

  return (
    <div>
      <h2>Todo List</h2>
      <form className="Card">
        <input
          placeholder="Add a new task"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
        <div></div>
        <br />
      </form>
      <div className="Todos">
        {todos.map((todo, i) => {
          return (
            <div key={i}>
              <h1>{todo.todo}</h1>
              <p>
                Completed is{" "}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  name="Checked"
                  onChange={toggleID}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoForm;
