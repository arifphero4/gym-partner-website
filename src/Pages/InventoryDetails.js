import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const InventoryDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`https://guarded-stream-39740.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handleDelivered = (id) => {
    const quantity = product.quantity;
    let newQuantity = quantity - 1;
    const newProduct = { quantity: newQuantity };
    setProduct(newProduct);

    if (newQuantity > -1) {
      fetch(`https://guarded-stream-39740.herokuapp.com/inventory/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => setIsReload(!isReload));
    }
  };

  const handleUpdateStock = (event) => {
    event.preventDefault();

    const stock = event.target.AddQuantity.value;
    const newStock = parseInt(stock);
    const oldStock = parseInt(product.quantity);
    const restock = oldStock + newStock;
    const newProduct = { quantity: restock };

    console.log(newProduct);
    fetch(`https://guarded-stream-39740.herokuapp.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!isReload);
        event.target.reset();
      });
  };
  return (
    <>
      <Header></Header>

      <div className="container" style={{ marginTop: "150px" }}>
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
              <button
                className="btn btn-danger py-2"
                onClick={() => handleDelivered(id)}
              >
                Delivered
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center  ">
            <form onSubmit={handleUpdateStock} className=" text-center">
              <input
                className="w-50 ps-2 p-2"
                type="number"
                name="AddQuantity"
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
