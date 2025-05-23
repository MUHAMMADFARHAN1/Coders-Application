import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router";

import { LOGIN_USER, LOGOUT_USER } from "./../redux/slice/types";

export default function Dashboard() {
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
    <div className=" flex flex-row mt-8 mx-18 justify-between">
      <p>Dashboard</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
