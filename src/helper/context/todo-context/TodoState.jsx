import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  FIND_TODO_BY_ID,
  LOGIN_USER,
  TOGGLE_TODO_COMPLETE,
  UPDATE_TODO,
} from "./TodoTypes";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    todo: {},
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  //   Pure functions - GOING TO DISPATCH ACTIONS
  const login = () => {
    dispatch({ type: LOGIN_USER });
  };

  const addTodo = (todoObj) => {
    dispatch({ type: ADD_TODO, payload: todoObj });
  };

  const toggleTodoComplete = (todoId) => {
    dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todoId });
  };

  const deleteTodo = (todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  };

  const updateTodo = (newTodoObject) => {
    dispatch({ type: UPDATE_TODO, payload: newTodoObject });
  };

  const findTodoById = (todoId) => {
    dispatch({ type: FIND_TODO_BY_ID, payload: todoId });
  };

  return (
    <TodoContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        todos: state.todos,
        login,
        addTodo,
        toggleTodoComplete,
        deleteTodo,
        updateTodo,
        findTodoById,
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
