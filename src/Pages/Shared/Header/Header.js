import React from "react";
import logo from "../../../images/logo2.png";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3  text-black">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center">
        <button className="px-4 py-2 rounded-lg  text-black hover:text-[#F91944] focus:outline-none focus:shadow-outline">
          Cart
        </button>
        <button className="px-4 py-1 rounded-full bg-[#F91944] text-white hover:bg-[#e10d37] focus:outline-none focus:shadow-outline ml-4">
          Login
        </button>
        <button className="px-4 py-1 rounded-full bg-[#F91944] text-white hover:bg-[#e10d37] focus:outline-none focus:shadow-outline ml-4">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
