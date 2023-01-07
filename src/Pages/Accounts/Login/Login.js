import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import "../Account.css";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
      navigate("/");
    }

  return (
    <div className="md:bg-[url('https://i.ibb.co/sF1FQch/20230107-235246-0000.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center bg-center min-h-[600px] min-w-full overflow-hidden">
      <div className="w-[350px] mx-auto account">
        <img className="mx-auto w-2/3 mb-10" src={logo} alt="" />
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
          <input
            onBlur={(e) => setEmail(e.target.value)}
            className="p-3 w-full bg-gray-100 rounded-lg"
            placeholder="Enter your name"
            type="text"
            name="deliveryType"
            // value={delivery.deliveryType}
            // onChange={handleChange}
          />
          <br />
          <input
            onBlur={(e) => setPassword(e.target.value)}
            className="p-3 w-full bg-gray-100 rounded-lg"
            placeholder="Enter your password"
            type="password"
            name="deliveryType"
            // value={delivery.deliveryType}
            // onChange={handleChange}
          />
          <br />
          {loading && <p className="text-[#F91944] py-2 text-sm">Loading...</p>}
          {error && <p className="text-[#F91944] py-2 text-sm">{error.message}</p>}
          <button
            className="p-3 w-full bg-[#F91944] rounded-lg text-white"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="my-2 text-center">
          Don't have an account?
          <Link className="text-[#F91944] ml-1" to={"/signUp"}>
            Sign up
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
