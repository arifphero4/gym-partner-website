import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";

const InventoryDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
      <h3>this is Inventory Details page</h3>
    </div>
  );
};

export default InventoryDetails;
