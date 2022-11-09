import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoContext from "../helper/context/todo-context/TodoContext";

export const TodoDetail = () => {
  const { todo_id } = useParams();
  const { findTodoById, todo } = useContext(TodoContext);

  useEffect(() => {
    findTodoById(todo_id);
  }, []);

  return (
    <div>
      <li>id: {todo_id}</li>
      <li>Title: {todo?.title}</li>
      <li>Status: {todo?.isCompleted ? "Done" : "Pending"}</li>
    </div>
  );
};
