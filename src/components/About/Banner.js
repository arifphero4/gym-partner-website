/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="h-96 overflow-hidden relative">
        <img
          className="w-full"
          src="https://raw.githubusercontent.com/codergalib20/image_upload/main/195688855_1462908814069523_4019275626700966924_n.jpg"
        />
        <div
          className="absolute top-0 h-full flex items-center flex-col justify-center w-full"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div>
            <ul className="flex items-center w-full text-center justify-center">
              <li className="text-gray-50 font-bold text-xl pr-3">
                <Link to="/home">Home</Link>
              </li>
              <span className="text-2xl font-bold text-white">||</span>
              <li className="text-gray-400 font-bold text-xl pl-3">About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
