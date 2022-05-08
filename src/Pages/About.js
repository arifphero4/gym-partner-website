import React from "react";
import Banner from "../Components/About/Banner";
import Me from "../Components/About/Me";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const About = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Me/>
      <Footer />
    </div>
  );
};

export default About;
