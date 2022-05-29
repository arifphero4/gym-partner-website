import React from "react";
import ManageDetails from "../components/ManageInventory/ManageDetails";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ManageInventories = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "150px" }}>
        <ManageDetails></ManageDetails>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ManageInventories;
