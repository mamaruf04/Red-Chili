import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import googleLogo from "../../../images/icons/googleLogo .png";
import "../Account.css";

const SocialLogin = () => {

  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center my-3 account">
      <div className="w-[400px] flex justify-center items-center gap-3 mb-3">
        <div className="w-1/3 bg-gray-400 h-[1px]"></div>
        <span>or</span>
        <div className="w-1/3 bg-gray-400 h-[1px]"></div>
      </div>
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-2 py-2 px-3  border-solid border  border-[#F91944] rounded-lg cursor-pointer"
      >
        <img className="w-6" src={googleLogo} alt="" />
        <span className="text-sm">Continue with Google</span>
      </div>
    </div>
  );
};

export default SocialLogin;
