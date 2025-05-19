import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router";

// There multiple ways of performing protection routes and doing State management for them, but centralized state along with inbuilt protect routes is best.

//Protected Routes Logic
// https://dev.to/collins87mbathi/reactjs-protected-route-m3j

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
