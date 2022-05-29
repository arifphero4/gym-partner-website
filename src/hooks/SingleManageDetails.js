import React from "react";
import { useNavigate } from "react-router-dom";

const SingleManageDetails = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;

  return (
    <div className="mb-5 g-5 col-sm-12 col-md-6 ">
      <div className="card  " style={{ width: "500px" }}>
        <img src={image} className="card-img-top  w-100" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
          <p>Price: ${price} </p>
          <p>Quantity: {quantity} </p>
          <h5>Supplier: {supplier} </h5>
          <button className="btn btn-danger"> DELETE </button>
        </div>
      </div>
    </div>
  );
};

export default SingleManageDetails;
