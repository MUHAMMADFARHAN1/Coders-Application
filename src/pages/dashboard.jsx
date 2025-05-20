import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "./../redux/slice/types";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    dispatch({ type: LOGIN_USER });
  }

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}
