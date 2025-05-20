import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "./../redux/slice/types";

export default function Dashboard() {
  const auth = useSelector((store) => store.authenticated);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if (token) {
    dispatch({ type: LOGIN_USER });
    // Additional logic to validate the token and fetch user details
  }

  console.log(auth);
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
}
