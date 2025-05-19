import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ path, exact, children }) => {
  const auth = useSelector((store) => store.authenticated);

  //   return auth ? (
  //     <Route path={path} exact={exact}>
  //       {children}
  //     </Route>
  //   ) : (
  //     <Redirect to="/" />
  //  );

  if (!auth) {
    return navigate("/signin");
  }
  return children;
};

export default ProtectedRoute;
