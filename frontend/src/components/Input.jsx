import React from "react";

const Input = ({type, placeholder}) => {
  return (
    <div>
      <input
        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
