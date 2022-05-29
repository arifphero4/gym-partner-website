import React, { useEffect, useState } from "react";

import "./Inventory.css";
import SingleInventory from "./SingleInventory";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-success text-uppercase text-center">Inventory</h2>
      <div className="row">
        {products?.slice(0, 6)?.map((product) => (
          <SingleInventory
            key={product._id}
            product={product}
          ></SingleInventory>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
