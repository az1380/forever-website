import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ShopContext } from "../context/ShopContext";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { cartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">
      <Link to={"/"}>
        <img src={assets.logo} className="w-36" alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p className="ml-3">HOME</p>
          <hr className="w-2/4 border-none  h-[1.5px] bg-gray-700 hidden ml-2 "></hr>
        </NavLink>
        <NavLink
          to="/collections"
          className="flex flex-col items-center gap-1 "
        >
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none  h-[1.5px] bg-gray-700 hidden "></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none  h-[1.5px] bg-gray-700 hidden "></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none  h-[1.5px] bg-gray-700 hidden "></hr>
        </NavLink>
      </ul>
      <div className="flex  justify-center items-center  gap-6">
        <SearchBar></SearchBar>
        <div className="group relative">
          <Link to='LoginSignup'>
            <img
              src={assets.profile_icon}
              className="w-5 min-w-5 cursor-pointer"
              alt="Profile Icon"
            />
          </Link>
          <div className="group-hover:block hidden dropdown-menu absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-35 bg-gray-100 px-5 py-3 rounded-lg text-gray-500 ">
              <p className="cursor-pointer hover:text-black whitespace-nowrap">
                My Profile
              </p>
              <p className="cursor-pointer  hover:text-black">Orders</p>
              <p className="cursor-pointer  hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5"></img>
          <p className=" rounded-full right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square text-[8px] absolute bg-black text-white">
            {cartCount}
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          alt="menu icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-3 pl-1 py-2 cursor-pointer "
          >
            <img
              className=" h-4  rotate-180"
              src={assets.dropdown_icon}
              alt="dropdown icon"
            ></img>
            <p>BACK</p>
          </div>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/collections"
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
