import React from "react";
import { useState } from "react";
import coding from "./../assets/coding.png";
import { useNavigate, NavLink } from "react-router";

//Controlled and uncontrolled react forms!
//https://www.freecodecamp.org/news/how-to-build-forms-in-react/
//https://www.geeksforgeeks.org/working-with-forms-in-react/
//https://dev.to/theudemezue/how-to-handle-form-data-in-react-js-40na
// There are two ways to validate the react form using state (for controlled components) and ref (for uncontroleed components)

export default function Signup() {
  const [First, setFirstName] = useState("");
  const [Last, setLastName] = useState("");
  const [Mail, setEmail] = useState("");
  const [Pass, setPassword] = useState("");

  let navigate = useNavigate();

  //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  //https://medium.com/@python-javascript-php-html-css/the-best-regular-expression-for-email-address-verification-42bf83ba2885

  let Passregex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
  let MailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can process the login data here
    let result = MailRegex.test(Mail);
    console.log(result);
    if (!MailRegex.test(Mail)) {
      alert("wrong email");
    }
    // else if ()

    // else if ()
    else {
      navigate("/signin");
    }
    // console.log("Email:", Mail);
    // console.log("Password:", Pass);
  };

  return (
    <div className="grid grid-cols-2 h-screen min-w-full">
      <div className=" bg-[#23155b] ">
        <img src={coding} className="m-auto pt-35" alt="" />
      </div>
      <div className=" bg-[#f4f4f4] ">
        <div className=" bg-white w-1/3 flex flex-col mx-auto mt-40 text-center gap-2 rounded py-8 px-2 min-w-min">
          <p className="pb-4">Join Coders Now!</p>
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              value={First}
              onChange={(e) => setFirstName(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              value={Last}
              onChange={(e) => setLastName(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={Mail}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <input
              type="text"
              name="Password"
              placeholder="Password"
              value={Pass}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-[#23155b] rounded py-1 text-white placeholder:p-2"
            />
            <button type="submit" className="bg-blue-600">
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Already have an account? <NavLink to="/signin">Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
