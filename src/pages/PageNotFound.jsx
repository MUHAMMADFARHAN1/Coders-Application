import React from "react";
import Navbar from "../Components/Navbar";

import { useSelector } from "react-redux";

export default function PageNotFound() {
  const auth = useSelector((store) => store.authenticated);
  console.log(auth);
  return (
    <>
      {auth == true ? <Navbar /> : <div></div>}
      {/* <Navbar /> */}
      <div>
        <p>Sorry, the page could not be located.</p>
      </div>
    </>
  );
}
