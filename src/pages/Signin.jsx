import React from "react";
import { useState } from "react";
import coding from "./../assets/coding.png";

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
              Already have an account? <span>Signup</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
