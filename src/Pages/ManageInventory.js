/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Rating from "react-rating";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
const ManageInventory = ({ service }) => {
  const { img, title, description, price, review, key } = service;
  return (
    <div
      className="flex items-center justify-between flex-col shadow-lg rounded-md border-2 border-blue-900 overflow-hidden"
      style={{ minHeight: "350px" }}
    >
      <div>
        <img className="w-full" src={img} />
      </div>
      <div className="px-3 py-3">
        <strong className="py-2 font-bold text-gray-900 text-xl">
          {title}
        </strong>
        <p className="text-md text-gray-600 font-medium">
          {description?.slice(0, 80)}...
        </p>
      </div>
      <div className="flex items-center justify-between w-full px-3">
        <div>
          <Rating initialRating={review} readonly />
        </div>
        <div className="flex items-center font-bold text-xl text-gray-700">
          <MdOutlineAttachMoney /> {price}
        </div>
      </div>
      <div className="flex items-center justify-start w-full px-3 py-3">
        <Link to={`/details/${key}`}>
          <button className="py-2 px-4 bg-blue-700 text-base font-bold text-gray-50 rounded-md">
            checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventory;
