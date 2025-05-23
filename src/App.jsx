import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/slice/store";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

// There multiple ways of performing protection routes and doing State management for them, but centralized state along with inbuilt protect routes is best.

//Protected Routes Logic
// https://dev.to/collins87mbathi/reactjs-protected-route-m3j
// https://dev.to/akanstein/protected-routes-with-react-router-and-redux-3e62

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route index element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
