import React from "react";
import error from "../../images/notFound3.gif";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <>
      <Header></Header>
      <div className="text-center min-vh-100">
        <img className="img-fluid" src={error} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
