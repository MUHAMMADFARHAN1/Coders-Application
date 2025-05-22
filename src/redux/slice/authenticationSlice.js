import { createSlice } from "@reduxjs/toolkit";
import { LOGIN_USER, LOGOUT_USER } from "./../types";

//https://www.reddit.com/r/reactjs/comments/127ndrh/the_slice_reducer_returned_undefined_during/

//dispatching function actions with pazlod
//https://www.geeksforgeeks.org/react-redux-hooks-useselector-and-usedispatch/

const intitial = {
  authenticated: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: intitial,
  reducers: {
    login: (state, action) => {
      if (action.payload == LOGIN_USER) {
        state.authenticated = true;
      }
    },
    logout: (state, action) => {
      // if (action.type == LOGOUT_USER) {
        state.authenticated = false;
      // }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
