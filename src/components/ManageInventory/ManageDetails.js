import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleManageDetails from "../../hooks/SingleManageDetails";

const ManageDetails = () => {
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
        {products?.map((product) => (
          <SingleManageDetails
            key={product.id}
            product={product}
          ></SingleManageDetails>
        ))}
      </div>
      <Link to="/addItems">
        {" "}
        <button className="text-uppercase btn btn-success p-3 m-5  fw-bold">
          add new item
        </button>
      </Link>
    </div>
  );
};

export default ManageDetails;
