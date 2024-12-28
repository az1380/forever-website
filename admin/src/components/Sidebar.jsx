import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div >
      <div className="flex flex-col gap-4">
        <NavLink
          className={`flex gap-3 bg-gray-100 items-center border border-gray-300 border-r-0 rounded-l py-2 px-3 ml-3`}
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className="hidden md:block"> Add items</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`flex gap-3 items-center border border-r-0 rounded-l py-2 px-3 ml-3`}
        >
          <img src={assets.order_icon} alt="" />
          <p> List items</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`flex gap-3 bg-gray-100 items-center border border-gray-300 border-r-0 rounded-l py-2 px-3 ml-3 `}
        >
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
