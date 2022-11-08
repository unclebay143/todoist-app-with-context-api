import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import { ADD_TODO, TOGGLE_TODO_COMPLETE } from "./TodoTypes";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //   Pure functions - GOING TO DISPATCH ACTIONS
  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload: todoObj });
  };

  const toggleTodoComplete = (todoId) => {
    dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todoId });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodoComplete,
        ...state,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// state ✅
// prop ❌
// initial state ❌
// pure functions ✅
