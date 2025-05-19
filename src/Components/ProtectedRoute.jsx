import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Route } from "react-router-dom";

import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ /*(path, exact,*/ children }) => {
  const auth = useSelector((store) => store.authenticated);
  const navigateTo = useNavigate();

  //   return auth ? (
  //     <Route path={path} exact={exact}>
  //       {children}
  //     </Route>
  //   ) : (
  //     <Redirect to="/" />
  //  );

  // if (!auth) {
  //   return <Navigate to="/signin" replace />;
  // }
  // return children;
  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
