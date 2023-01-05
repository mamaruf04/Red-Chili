import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {

  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleGoogleSignIn} className="border-none py-2 px-3 bg-[#F91944] text-white rounded-lg">
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
