import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
 
  const { search, setSearch } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search) {
      navigate("/collections"); // Redirect to Collections page on Enter key press
    }
  };

  return (
    <div>
      <div className="  relative flex items-center  w-full max-w-xs sm:max-w-md md:max-w-lg ml-2 ">
        <input
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className=" border border-gray-400 rounded-xl px-4 py-1 text-md pr-10 ml-2 w-full "
          placeholder="Search"
        />
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer absolute right-2" // Position the icon on the right side
          alt="Search Icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
