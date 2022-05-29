import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import img from "../../../images/login.gif";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    // navigate("/home");
    console.log("user", user);
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password1.value;
    // console.log(name, email, password);

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };
  return (
    <div>
      <Container>
        <Row
          style={{ paddingTop: "25px" }}
          className="d-flex align-items-center"
        >
          <Col xs={12} md={12} lg={6}>
            <img style={{ width: "100%" }} src={img} alt="" />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="form-area my-4">
              <h3
                style={{
                  color: "#10b377",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                REGISTER
              </h3>
              <form className="text-center" onSubmit={handleRegister}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <br />
                <br />
                <input type="email" name="email" placeholder="Email" required />
                <br />
                <br />
                <input
                  type="password"
                  name="password1"
                  placeholder="Password"
                  required
                />
                <br />
                <br />
                <input
                  type="password"
                  name="password2"
                  placeholder="Re-enter Password"
                  required
                />
                <br />
                <br />
                <button type="submit" className="mt-2 securityBtn">
                  REGISTER
                </button>
                <Link
                  to="/login"
                  style={{
                    display: "block",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  <span className="text-dark mx-2">
                    Already have an account?
                  </span>
                  <span className="pe-auto" onClick={navigateLogin}>
                    Please Login
                  </span>
                </Link>
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
              <div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
