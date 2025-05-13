import React from "react";
import coding from "./../assets/coding.png";

export default function Signin() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" bg-[#23155b] ">
        <img src={coding} className="m-auto pt-35" alt="" />
      </div>
      <div className=" bg-[#f4f4f4] ">
        <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 min-w-min">
          <p className="pb-4">Join Coders Now!</p>
          <input
            className=" bg-[#23155b] w-2/5 mx-auto px-30 rounded py-1"
            type="text"
            name="Email"
          />
          <input
            className=" bg-[#23155b] w-2/5 mx-auto px-30 rounded py-1"
            type="text"
            name="Password"
          />
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
