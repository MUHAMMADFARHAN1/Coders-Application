import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router";

import { LOGIN_USER, LOGOUT_USER } from "./../redux/slice/types";

export default function Leaderboard() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  if (token) {
    dispatch({ type: LOGIN_USER });
  }

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER });
    navigateTo("/signin");
    console.log("Hello");
  };

  return (
    <>
      <div className=""></div>
      <h1>Leaderboard</h1>
      <div></div>
    </>
  );
}
