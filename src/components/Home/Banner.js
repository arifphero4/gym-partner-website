/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Banner = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center flex-col">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <h1 className="text-3xl mt-28 lg:mt-0 md:text-6xl font-bold text-blue-600">
              GYM PARTNER
            </h1>
            <p className="text-xl font-medium text-gray-600 mt-4">
              The Fit Academy Advanced Personal Trainer Diploma Certification is
              Delivered Through Blended Learning, Combining Home Study that
              Utilizes our award Winning E-Learning Software followed by 2 Weeks
              of Practical Coaching & Assessment at our World Class Training
              Campuses in Europe, UAE & Australia.
            </p>
            <button className="text-lg font-bold uppercase py-2 px-8 bg-gray-50 hover:bg-blue-700 border-2 border-blue-700 text-blue-700 rounded-md mt-4 hover:text-blue-50 transition-all ease-linear">
              Explore
            </button>
          </div>
          <div>
            <img src="https://raw.githubusercontent.com/codergalib20/image_upload/main/banner.c8753140bd2c8398de22.gif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
