import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleManageDetails from "./SingleManageDetails";

const ManageDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <Link to="/addItems">
          {" "}
          <button className="text-uppercase btn btn-success p-3 m-5  fw-bold">
            add new item
          </button>
        </Link>
      </div>

      <h2 className="text-success text-uppercase text-center">
        total Inventory items:{" "}
        <span className="text-danger"> {products.length}</span>
      </h2>
      <div className="px-5">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Supplier</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products?.map((product, index) => (
              <SingleManageDetails
                key={product._id}
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
