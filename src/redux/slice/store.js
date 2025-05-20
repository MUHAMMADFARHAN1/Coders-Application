import { configureStore } from "@reduxjs/toolkit";
import { LOGIN_USER } from "./types";

// our store can have multiple slices which make it easier to manage the state but configure store in itself can also be used in our design
//https://dev.to/dionarodrigues/redux-toolkit-fundamentals-simplifying-state-management-41m4
// https://itenium.be/blog/javascript/reduxjs-toolkit-createSlice/

const intitialState = {
  authenticated: false,
};

const reducer = (state = intitialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, authenticated: true };

    case LOGOUT_USER:
      return { ...state, authenticated: false };

    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
