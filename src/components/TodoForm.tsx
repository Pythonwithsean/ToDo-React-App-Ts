import React, { useState } from "react";

function TodoForm() {
  interface Todo {
    id: string;
    newItem: string;
    completed: boolean;
  }

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const capitalize = (stringItem: string) => {
    return (
      stringItem.charAt(0).toUpperCase() +
      stringItem.slice(1, stringItem.length)
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== "") {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            newItem: capitalize(value),
            completed: false,
          },
        ];
      });
    }

    setValue("");
  };
  const delTodo = (id: string) => {
    return setTodos((curr) => {
      return curr.filter((todo) => todo.id !== id);
    });
  };
  function ToggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed };
        }
        return todos;
      });
    });
  }
  {
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <label>ToDo List</label>
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

        {todos.map((todo, index) => {
          return (
            <div className="list-item" key={index}>
              {todo.newItem}
              <input
                type="checkbox"
                name="isTodoCompleted"
                id="isTodoCompleted"
                checked={todo.completed}
                onChange={(e) => ToggleTodo(todo.id, e.target.checked)}
              />{" "}
              <input
                className="del-btn"
                type="button"
                value="Delete"
                onClick={(e) => delTodo(todo.id)}
              />
            </div>
          );
        })}
      </form>
    );
  }
}

export default TodoForm;
