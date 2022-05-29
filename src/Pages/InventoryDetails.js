import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const InventoryDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <Header></Header>

      <div>
        <h3>this is Inventory Details page: {product.name}</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
        <h3>this is Inventory Details page</h3>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InventoryDetails;
