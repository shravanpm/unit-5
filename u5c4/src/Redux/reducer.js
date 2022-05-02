import { isAuth,setUSER } from "./actions";
import { setAuth } from "./actions";
// import { store } from "./store";
const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case isAuth : 
      return {
        ...store,
        Auth : payload,
      }
    case setUSER :
        return {
          ...store,
          userData : payload,
        }

    default:
      return store;
  }
};
