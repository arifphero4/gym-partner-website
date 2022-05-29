import React from "react";
import About from "../components/About/About";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Abouts = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "150px" }}>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Abouts;
