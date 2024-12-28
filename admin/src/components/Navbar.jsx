import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%]">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button className="bg-gray-600 rounded-full px-5 py-2 sm:px-7 sm:py2 text-xs sm:text-sm text-white">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
