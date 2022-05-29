import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../images/login.gif";

import "./Login.css";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";
import swal from "sweetalert";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    console.log(email, password, user);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      swal("SENT EMAIL", "", "success");
    } else {
      swal("please enter your email!", "", "warning");
    }
  };

  return (
    <div>
      <Container>
        <Row
          style={{ paddingTop: "25px" }}
          className="d-flex align-items-center"
        >
          <Col xs={12} md={12} lg={6}>
            <div className="form-area my-2">
              <h3
                style={{
                  color: "#10b377",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                LOGIN
              </h3>
              <form className="text-center" onSubmit={handleSubmit}>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <br />
                <br />
                <input
                  ref={passwordRef}
                  type="password"
                  name="password1"
                  placeholder="Password"
                  required
                />
                <br />
                <br />
                <button type="submit" className="mt-2 securityBtn">
                  LOGIN
                </button>
                <Link
                  to="/register"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  <span className="text-dark mx-2">
                    {" "}
                    Don't have any account?
                  </span>
                  <span className="pe-auto " onClick={navigateRegister}>
                    Please Register
                  </span>
                </Link>
                <button
                  className="btn btn-link"
                  style={{
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  <span className="text-dark mx-2"> Forget password?</span>
                  <span className="pe-auto " onClick={resetPassword}>
                    Reset Password
                  </span>
                </button>
                <Link
                  to="/home"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  Cancel
                </Link>
              </form>
              {errorElement}
              <div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
            <br />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <img style={{ width: "100%" }} src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
