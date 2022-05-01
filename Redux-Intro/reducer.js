import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

export const Addreducer = (store, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, payload],
      };
    case DELETE_TODO:
      return {
        ...store,
        todos: store.todos.filter((item) => item !== payload),
      };


    default:
      return store;
  }
};

const toggle = (todo, payload) => {
  if (todo.id !== payload.id) {
    return todo;
  }

  return {
    ...todo,
    status: !todo.status,
  };
};
