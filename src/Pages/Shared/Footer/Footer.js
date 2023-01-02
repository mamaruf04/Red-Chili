import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer className="flex h-60 bg-gray-900 text-white">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="flex justify-center flex-col gap-10">
          <img width={"150px"} src={footerLogo} alt="" />
          <p className="text-white" >© Copyright 2023</p>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col items-center justify-center">
        <Link>About Online Food</Link>
        <Link>Read our blog</Link>
        <Link>Sign up to delivery</Link>
        <Link>Add your restaurant</Link>
      </div>
      <div className="w-1/4 h-full flex flex-col items-center justify-center">
        <Link>Get help</Link>
        <Link>Read FAQ</Link>
        <Link>View all clients</Link>
        <Link>Restaurant near me</Link>
      </div>
    </footer>
  );
};

export default Footer;
