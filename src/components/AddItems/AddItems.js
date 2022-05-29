import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./AddItems.css";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
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
              {...register("supplierName", { required: true })}
            />
            <br />
            {errors.supplierName && (
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
