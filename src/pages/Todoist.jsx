import React, { useContext } from "react";
import TodoContext from "../helper/context/todo-context/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const Todoist = () => {
  const [title, setTitle] = React.useState("");
  const { addTodo, todos, toggleTodoComplete } = useContext(TodoContext);

  const handleSubmit = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <div>
      <section>
        <input
          placeholder='Enter todo title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className='add-btn' onClick={handleSubmit}>
          Add Todo
        </button>
      </section>

      <section>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                className={todo.isCompleted ? "completed" : null}
                key={todo.id}
              >
                {todo.title}
                {/* View buttton */}
                <button className='action-btn'>👁</button>
                {/* Toggle complete button */}
                <button
                  className='action-btn'
                  onClick={() => toggleTodoComplete(todo.id)}
                >
                  {todo.isCompleted ? "❌" : "✅"}
                </button>
                {/* Edit button */}
                <button className='action-btn'>✍️</button>
                {/* Delete button */}
                <button className='action-btn'>🗑</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
