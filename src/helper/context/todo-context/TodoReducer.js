import {
  ADD_TODO,
  DELETE_TODO,
  FIND_TODO_BY_ID,
  LOGIN_USER,
  TOGGLE_TODO_COMPLETE,
  UPDATE_TODO,
} from "./TodoTypes";

const TodoReducer = (state, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, payload],
      };

    case TOGGLE_TODO_COMPLETE:
      return {
        ...state,
        todos: todos.map((todo) => {
          console.log(todo.id, payload);
          if (todo.id === payload) {
            const updatedTodo = {
              ...todo,
              isCompleted: !todo.isCompleted,
            };

            return updatedTodo;
          } else {
            return todo;
          }
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === payload.id ? { ...todo, title: payload.title } : todo
        ),
      };

    // const updatedTodo = payload; // {title, id}
    // const updatedTodos = todos.map((todo) => {
    //   if (todo.id === payload.id) {
    //     return updatedTodo; // {}
    //   }

    //   return todo;
    // });

    // return {
    //   ...state,
    //   todos: updatedTodos,
    // };

    case FIND_TODO_BY_ID:
     
      return {
        ...state,
        todo: todos.find((todo) => todo.id === payload) // return: obj
      };

    default:
      return state;
  }
};

export default TodoReducer;

// 1. Create action type
// 2. Create pure function to dispatch action in the state component
// 3. Write logic for the dispatched action in the reducer function
// 4. Make use of the pure function in the ui
