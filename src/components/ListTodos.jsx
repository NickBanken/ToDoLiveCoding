import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListTodos = () => {
  const initialList = [
    { name: "Learn react", done: false, id: uuidv4() },
    { name: "Learn tailwind", done: false, id: uuidv4() },
    { name: "Finish project", done: false, id: uuidv4() },
  ];

  const [todos, setTodos] = useState(initialList);

  const handleCheck = (id) => {
    const newList = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newList);
  };

  return (
    <ul className="p-5">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              className="mr-3"
              type="checkbox"
              id={todo.id}
              onChange={() => {
                handleCheck(todo.id);
              }}
            />
            <label
              className={todo.done ? "line-through" : "no-underline"}
              htmlFor={todo.id}
            >
              {todo.name}.
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTodos;
