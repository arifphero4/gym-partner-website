import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SingleManageDetails = ({ product, index }) => {
  const { _id, name, price, quantity, supplier } = product;

  const removeProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/inventory/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());

        swal("user deleted seccessfully", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  /*  
            <Link to={`/inventory/${_id}`}>
              <button className="text-uppercase btn btn-success  m-5  fw-bold">
                Manage
              </button>
            </Link> */

  return (
    <tr>
      <th scope="row">{index + 1} </th>
      <td>{name}</td>
      <td>{price}</td>
      <td>{supplier}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={removeProduct}
          className="text-uppercase btn btn-danger   fw-bold"
        >
          {" "}
          DELETE{" "}
        </button>
      </td>
    </tr>
  );
};

export default SingleManageDetails;
