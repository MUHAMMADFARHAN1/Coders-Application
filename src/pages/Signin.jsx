import React from "react";
import { useState } from "react";
import coding from "./../assets/coding.png";
import { NavLink } from "react-router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER } from "./../redux/slice/types";

import { useSelector } from "react-redux";

//Yup is simple javascript whereas zod is based on Typescript

// synchronous and asynchronous YUP (https://strapi.io/blog/yup-validation-in-react-hook-form-a-complete-guide-with-examples)
// React form Validation with yup (https://dev.to/lawaniej/form-validation-with-yup-2kmg) (https://medium.com/@olivier.trinh/how-to-create-form-validation-with-yup-library-in-reactjs-4846f045957a)
//React form hook Validation with library (https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)

// Yup schema is order and case sensitive watch out for it
// Define Yup Schema
const schema = yup.object({
  // name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8).max(32),
  // age: yup
  //   .number()
  //   .min(18, "You must be at least 18")
  //   .required("Age is required"),
});

export default function Signin() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigateTo = useNavigate();
  const auth = useSelector((store) => store.authenticated);
  console.log(auth);

  // const token = localStorage.getItem("token");
  // // dispatch = useDispatch();

  // if (token) {
  //   dispatch({ type: LOGIN_USER });
  //   // Additional logic to validate the token and fetch user details
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    dispatch({ type: LOGIN_USER });
    navigateTo("/dashboard");
    localStorage.setItem("token", true);
    // history.push("/");
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" bg-[#23155b] ">
        <img src={coding} className="m-auto pt-35" alt="" />
      </div>
      <div className=" bg-[#f4f4f4] ">
        <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 px-2 min-w-min">
          <p className="pb-4">Join Coders Now!</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <input
              {...register("email")}
              // name="Email"
              placeholder="Email"
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
              type="text"
              placeholder="Password"
              // name="Password"
            />
            <p>{errors.password?.message}</p>
            <button type="submit" className="bg-blue-600 rounded">
              Login
            </button>
          </form>
          <div>
            {/* <button className="bg-blue-600">Login</button> */}
            <p>
              Already have an account? <NavLink to="/">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
