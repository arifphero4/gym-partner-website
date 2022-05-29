import React from "react";
import { Link } from "react-router-dom";

const SingleInventory = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;

  return (
    <div className="mb-5 g-5 col-sm-12 col-md-6 ">
      <div className="card  p-4">
        <img
          src={image}
          className="card-img-top "
          style={{ maxWidth: "50%" }}
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
          <p>Price: ${price} </p>
          <p>Quantity: {quantity} </p>
          <h5>Supplier: {supplier} </h5>
          <Link to={`/inventory/${_id}`}>
            <button className="btn btn-success">Stock Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
