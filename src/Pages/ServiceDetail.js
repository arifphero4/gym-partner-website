/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { useServices } from "../App";
import { MdOutlineAttachMoney } from "react-icons/md";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
const ServiceDetail = () => {
  const { id } = useParams();
  const [services] = useContext(useServices);
  const findService = services.find((service) => service?.key === Number(id));
  const { img, title, description, price, review, key } = findService;
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <img src={img} />
          </div>
          <div className="my-auto">
            <h2 className="font-bold text-3xl text-gray-700">{title}</h2>
            <div className="flex items-center justify-between color-red-500 py-3">
              <Rating initialRating={review} readonly />
              <div className="flex items-center font-bold text-2xl">
                <MdOutlineAttachMoney /> {price}
              </div>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
