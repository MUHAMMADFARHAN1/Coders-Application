import React from "react";
import coding from "./../assets/coding.png";
import { NavLink } from "react-router";

//Yup and Form Objects are here
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

//Redux state management code is here
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "./../redux/slice/types";
import { useSelector } from "react-redux";

//Yup is simple javascript whereas zod is based on Typescript

// synchronous and asynchronous YUP (https://strapi.io/blog/yup-validation-in-react-hook-form-a-complete-guide-with-examples)
// React form Validation with yup (https://dev.to/lawaniej/form-validation-with-yup-2kmg) (https://medium.com/@olivier.trinh/how-to-create-form-validation-with-yup-library-in-reactjs-4846f045957a)
//React form hook Validation with library (https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)

// Yup schema is order and case sensitive watch out for it
// Define Yup Schema
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8).max(32),
});

export default function Signin() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const auth = useSelector((store) => store.authenticated);
  console.log(auth);

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
              placeholder="Email"
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
            />
            <p>{errors.email?.message}</p>
            <input
              {...register("password")}
              className=" bg-[#23155b]  rounded py-1 text-white placeholder:p-1"
              type="text"
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
            <button type="submit" className="bg-blue-600 rounded">
              Login
            </button>
          </form>
          <div>
            <p>
              Already have an account? <NavLink to="/">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
