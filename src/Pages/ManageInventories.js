import React from "react";
import ManageDetails from "../components/ManageInventory/ManageDetails";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ManageInventories = () => {
  return (
    <div>
      <Header></Header>
      <ManageDetails></ManageDetails>
      <Footer></Footer>
    </div>
  );
};

export default ManageInventories;
