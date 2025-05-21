import { configureStore } from "@reduxjs/toolkit";
import { LOGIN_USER, LOGOUT_USER } from "./types";
import authReducer from "./slice/authenticationSlice";

// our store can have multiple slices which make it easier to manage the state but configure store in itself can also be used in our design
//https://dev.to/dionarodrigues/redux-toolkit-fundamentals-simplifying-state-management-41m4
// https://itenium.be/blog/javascript/reduxjs-toolkit-createSlice/

// const intitialState = {
//   authenticated: false,
// };

// const reducer = (state = intitialState, action) => {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, authenticated: true };

//     case LOGOUT_USER:
//       return { ...state, authenticated: false };

//     default:
//       return state;
//   }
// };

//https://gondi-sai.medium.com/redux-toolkit-creating-and-using-multiple-slices-in-react-react-no-29-9b5a2ac2ee89

// The redux stores and its slices can be organized, combined and initailiyed in multiple ways depening on project complexity
// There can also be mutliple stores present in an app, but such complexity is hard to locate
//

const store = configureStore({
  reducer: {
    aut: authReducer,
  },
});

export default store;
