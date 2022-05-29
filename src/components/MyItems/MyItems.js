import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://guarded-stream-39740.herokuapp.com/inventory/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.filter((d) => user.email === d.email));
      });
  }, [orders]);

  const removeProduct = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover user!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://guarded-stream-39740.herokuapp.com/inventory/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());

        swal("item deleted seccessfully", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });
  };

  return (
    <div className="px-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Supplier</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr>
              <th scope="row">{index + 1}</th>

              <td>{order.name}</td>
              <td> $ {order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
