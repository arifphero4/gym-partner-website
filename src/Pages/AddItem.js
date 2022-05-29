import React from "react";
import AddItems from "../components/AddItems/AddItems";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AddItem = () => {
  return (
    <div>
      <Header></Header>
      <AddItems></AddItems>
      <Footer></Footer>
    </div>
  );
};

export default AddItem;
