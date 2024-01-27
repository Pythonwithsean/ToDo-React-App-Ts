import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  type Todo = {
    id: string;
    todo: string;
    completed: boolean;
  };

  const [value, setValue] = useState("");
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

  const toggleID = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoForm">
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
        <button
          type="submit"
          onClick={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          Add
        </button>
        <div></div>
        <br />
      </form>
      <div className="Todos">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h1>{todo.todo}</h1>
              <p>
                Completed is{" "}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  name="Checked"
                  onClick={() => toggleID(todo.id)}
                />{" "}
                <button type="button" onClick={() => removeTodo(todo.id)}>
                  {" "}
                  Remove
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoForm;
