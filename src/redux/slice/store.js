import { configureStore } from "@reduxjs/toolkit";
import { LOGIN_USER } from "./types";

const intitialState = {
  //   authenticated: false,
  authenticated: true,
};

const reducer = (state = intitialState, action) => {
  //   switch (action.type) {
  //     case LOGIN_USER:
  //       return { ...state, authenticated: true };

  //     default:
  //       return state;
  //   }
  return { ...state, authenticated: true };
};

const store = configureStore({ reducer });

export default store;
