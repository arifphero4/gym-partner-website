import React from "react";
import AddItems from "../components/AddItems/AddItems";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AddItem = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ marginTop: "120px" }}>
        {" "}
        <AddItems></AddItems>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddItem;
