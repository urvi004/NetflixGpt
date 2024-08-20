import React from "react";
import { useState } from "react";
import Header from "./Header";
import bgImage from "../Assets/background.jpg";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="" />
      </div>
      <form className="absolute w-3/12 px-12 py-14 gap-8 bg-black bg-opacity-80 left-0 right-0 mx-auto my-40 flex flex-col text-white rounded-lg">
        <h1 className=" text-3xl font-bold">{isSignInForm? "Sign In":"Sign UP"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-3 bg-gray-900 border border-gray-300 rounded-md"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 bg-gray-900 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3  bg-gray-900  border border-gray-300 rounded-md"
        />
        <button type="submit" className="p-2 rounded-md bg-red-700 ">
          Login
        </button>
        <p onClick={()=>toggleSignInForm()}>{isSignInForm? "New to Netflix? Sign Up now":"Already a member? Sign In "}</p>
      </form>
    </>
  );
};

export default Login;
