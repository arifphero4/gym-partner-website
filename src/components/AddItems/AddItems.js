import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";
import "./AddItems.css";

/* hosting E jhamela */
const AddItems = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = user.email;

    // fetch("https://guarded-stream-39740.herokuapp.com/inventory");
    fetch("https://guarded-stream-39740.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Complete", "Product added to cart!", "success");
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-vh-100">
      <div className="container mb-4 add-service">
        <h2 className="text-center text-success mb-3">
          Add a new Item on Inventory
        </h2>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="product title"
              defaultValue=""
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
            <br />

            <input
              placeholder="price"
              type="number"
              {...register("price", { required: true })}
            />
            <br />
            {errors.price && (
              <span className="text-danger">This field is required</span>
            )}
            <br />

            <input
              placeholder="quantity"
              type="number"
              {...register("quantity", { required: true })}
            />
            <br />
            {errors.quantity && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input
              placeholder="supplier name"
              defaultValue=""
              {...register("supplier", { required: true })}
            />
            <br />
            {errors.supplier && (
              <span className="text-danger">This field is required</span>
            )}
            <br />

            <button
              className="btn btn-success w-100 justify-content-center align-items-center fw-bold"
              type="submit"
            >
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
