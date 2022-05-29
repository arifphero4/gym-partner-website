import React, { useEffect, useState } from "react";
import SingleInventory from "../../../hooks/SingleInventory";

import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-success text-center">
        total Inventory items: {products.length}
      </h2>
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
