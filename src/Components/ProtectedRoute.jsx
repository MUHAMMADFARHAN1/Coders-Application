import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Route } from "react-router-dom";

import { useNavigate, Navigate } from "react-router-dom";

//Persistance in case of a reset ahs been added as well now
//https://www.dhiwise.com/post/ultimate-guide-to-implementing-secure-redux-authentication

const ProtectedRoute = ({ /*(path, exact,*/ children }) => {
  const auth = useSelector((store) => store.authenticated);
  const navigateTo = useNavigate();

  const token = localStorage.getItem("token");
  if (token == "true") {
    return <Outlet />;
  }

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
