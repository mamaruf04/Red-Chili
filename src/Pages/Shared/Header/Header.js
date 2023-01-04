import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";

const Header = () => {
  return (
    <nav className="flex justify-between md:container mx-auto items-center px-4 py-3  text-black">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>
      <div className="flex items-center">
        <button className=" py-2 rounded-lg transform ease-out duration-300  text-black md:hover:text-[#F91944] focus:outline-none focus:shadow-outline">
          <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
        </button>
        <button className="md:px-4 px-2 py-1 rounded-full  transform ease-out duration-300 hover:text-white hover:bg-[#F91944] focus:outline-none focus:shadow-outline ml-4">
          Login
        </button>
        <button className="md:px-4 px-3 py-1 rounded-full bg-[#F91944] text-white hover:bg-[#e10d37] transform ease-out duration-300 focus:outline-none focus:shadow-outline ml-4">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
