import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Inventory from "../components/Home/Inventory/Inventory";
import Map from "../components/Home/Map/Map";
import Review from "../components/Home/Review/Review";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Inventory></Inventory>
      <Map></Map>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
