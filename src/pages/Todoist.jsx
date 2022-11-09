import React, { useContext, useState } from "react";
import TodoContext from "../helper/context/todo-context/TodoContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export const Todoist = () => {
  const [title, setTitle] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  const {
    addTodo,
    todos,
    toggleTodoComplete,
    isAuthenticated,
    login,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);

  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      isCompleted: false,
    };
    addTodo(newTodo);
    setTitle("");
  };

  const handleUpdateTodo = () => {
    const newTodoObject = { id: todoToEdit.id, title };
    updateTodo(newTodoObject);
    setIsEditMode(false);
    setTitle("");
  };

  const handleEditMode = (todoObject) => {
    setIsEditMode(true);
    setTodoToEdit(todoObject);
    setTitle(todoObject.title);
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          {isEditMode ? (
            <section>
              <input
                placeholder='Update todo title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className='edit-btn' onClick={handleUpdateTodo}>
                Update Todo
              </button>
            </section>
          ) : (
            <section>
              <input
                placeholder='Enter todo title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className='add-btn' onClick={handleAddTodo}>
                Add Todo
              </button>
            </section>
          )}

          <section>
            <ul>
              {todos.map((todo) => {
                const { isCompleted, id, title } = todo;
                return (
                  <li className={isCompleted ? "completed" : null} key={id}>
                    {title}
                    {/* View buttton */}
                    <Link to={`${id}`}>
                      <button className='action-btn'>👁</button>
                    </Link>
                    {/* Toggle complete button */}
                    <button
                      className='action-btn'
                      onClick={() => toggleTodoComplete(id)}
                    >
                      {isCompleted ? "❌" : "✅"}
                    </button>
                    {/* Edit button */}
                    <button
                      className='action-btn'
                      onClick={() => handleEditMode(todo)}
                    >
                      ✍️
                    </button>
                    {/* Delete button */}
                    <button
                      className='action-btn'
                      onClick={() => deleteTodo(id)}
                    >
                      🗑
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      ) : (
        <>
          <h3>Please login</h3>
          <button onClick={() => login()}>Login</button>
        </>
      )}
    </div>
  );
};

//  make buttons reusable
