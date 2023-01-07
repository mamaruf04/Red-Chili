import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };

  return (
    <nav className="flex justify-between md:container mx-auto items-center px-4 py-3  text-black">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>

      <div className="flex items-center">
        <Link to={"/cart"} className=" py-2 rounded-lg transform ease-out duration-300  text-black md:hover:text-[#F91944] focus:outline-none focus:shadow-outline">
          <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
        </Link>

        {user ? (
          <>
            <Link
              onClick={handleSignOut}
              to={"/"}
              className="md:px-4 px-2 py-1 rounded-full  transform ease-out duration-300 text-white bg-[#F91944] hover:bg-[#e10d37] focus:outline-none focus:shadow-outline ml-4"
            >
              Logout
            </Link>
            <img
              className="rounded-full w-8 h-8 md:w-10 md:h-10 ml-3 md:ml-5"
              src={user?.photoURL}
              alt=""
            />
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="md:px-4 px-2 py-1 rounded-full  transform ease-out duration-300 hover:text-white hover:bg-[#F91944] focus:outline-none focus:shadow-outline ml-4"
            >
              Login
            </Link>

            <Link to={"/signup"} className="md:px-4 px-3 py-1 rounded-full bg-[#F91944] text-white hover:bg-[#e10d37] transform ease-out duration-300 focus:outline-none focus:shadow-outline ml-4">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
