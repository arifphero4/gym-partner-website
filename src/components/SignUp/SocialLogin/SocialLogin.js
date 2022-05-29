import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/Google.png";
import github from "../../../images/github.png";
import "./SocialLogin.css";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div className="text-center">
      <button onClick={() => signInWithGoogle()} className="g-btn">
        <img src={google} alt="" /> Login With Google
      </button>
      <br />
      <button onClick={() => signInWithGithub()} className="g-btn">
        <img src={github} alt="" /> Login With Github
      </button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
