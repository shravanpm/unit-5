import { legacy_createStore as createStore } from "redux";
import { Addreducer } from "./reducer";

const initialStore = {
  todos: []
};

export const store = createStore(Addreducer, initialStore);
