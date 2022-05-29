import React from "react";
import MyItems from "../components/MyItems/MyItems";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const MyItem = () => {
  return (
    <div>
      <Header></Header>
      <MyItems></MyItems>
      <Footer></Footer>
    </div>
  );
};

export default MyItem;
