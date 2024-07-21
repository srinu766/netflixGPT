import React, { useState } from "react";
import Header from "./Header";
import bgImage from "../asserts/bgimage.jpeg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="logo" />
      </div>
      <form className="w-4/12 absolute  p-12  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
      {!isSignInForm &&  <input
          type="text" 
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
         <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <button className="p-4 w-full my-6  bg-red-700 round rounded-lg">
        {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm}>
          
          {isSignInForm ? "New to Netflix? Sign up now.":"Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
