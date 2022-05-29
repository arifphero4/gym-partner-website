import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

      <div className="container">
        <div className="row d-flex align-items-center  ">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex  bg-light py-5">
            <img width="40%" src={product.image} alt="map" />
            <div>
              <h3>{product.name}</h3>
              <small> Product ID: {product._id} </small>
              <h4>
                Price: <span>${product.price}</span>
              </h4>
              <p>
                <strong>Description:</strong>{" "}
                <small>{product.description}</small>
              </p>
              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <h5>
                Supplier: <i>{product.supplier}</i>
              </h5>
              <button className="btn btn-danger py-2">Delivered</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center  ">
            <form className=" text-center">
              <input
                className="w-50 ps-2 p-2"
                type="number"
                name="quantity"
                placeholder="add quantity"
                required
                id=""
              />
              <br />

              <input
                type="submit"
                value="Add Quantity"
                className="btn btn-success w-40 my-3"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Link to="/manageInventory" className="text-center">
          {" "}
          <button className="text-uppercase btn btn-success p-3 my-5  fw-bold">
            manage items
          </button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default InventoryDetails;
