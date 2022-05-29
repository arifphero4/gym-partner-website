import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleManageDetails from "./SingleManageDetails";

const ManageDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <Link to="/addItems">
        {" "}
        <button className="text-uppercase btn btn-success p-3 m-5  fw-bold">
          add new item
        </button>
      </Link>
      <h2 className="text-success text-center">
        total Inventory items: {products.length}
      </h2>
      <div className="px-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Supplier</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <SingleManageDetails
                key={product.id}
                index={index}
                product={product}
              ></SingleManageDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDetails;
