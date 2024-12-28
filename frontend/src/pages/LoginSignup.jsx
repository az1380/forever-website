import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHnadler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHnadler}
      className="flex flex-col gap-4 items-center w-[90%] sm:max-w-96 m-auto"
    >
      <div className="flex items-center gap-2 mt-14">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] border-none w-8 bg-gray-800"></hr>
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-600 rounded px-3 py-2 w-full"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-600 rounded px-3 py-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Password"
        className="border border-gray-600 rounded px-3 py-2 w-full"
        required
      />
      <div className="flex justify-between w-full text-sm">
        <Link>Forgot your password?</Link>
        {currentState === "Login" ? (
          <Link onClick={() => setCurrentState("Signup")}>Signup</Link>
        ) : (
          <Link onClick={() => setCurrentState("Login")}>Login</Link>
        )}
      </div>
      <button
        type="submit"
        className="bg-black text-white font-normal py-2 px-9"
      >
        {currentState}
      </button>
    </form>
  );
};

export default LoginSignup;
