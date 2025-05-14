import React from "react";
import { useState } from "react";
import coding from "./../assets/coding.png";
import { NavLink } from "react-router";

// synchronous and asynchronous YUP (https://strapi.io/blog/yup-validation-in-react-hook-form-a-complete-guide-with-examples)
// React form Validation with yup (https://dev.to/lawaniej/form-validation-with-yup-2kmg) (https://medium.com/@olivier.trinh/how-to-create-form-validation-with-yup-library-in-reactjs-4846f045957a)
//React form hook Validation with library (https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)


export default function Signin() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" bg-[#23155b] ">
        <img src={coding} className="m-auto pt-35" alt="" />
      </div>
      <div className=" bg-[#f4f4f4] ">
        <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 px-2 min-w-min">
          <p className="pb-4">Join Coders Now!</p>
          <form action="" className="flex flex-col gap-2">
            <input
              type="text"
              name="Email"
              placeholder="Email"
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
            />
            <input
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
              type="text"
              placeholder="Password"
              name="Password"
            />
          </form>
          <div>
            <button className="bg-blue-600">Login</button>
            <p>
              Already have an account? <NavLink to="/">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
