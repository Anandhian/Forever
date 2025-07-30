import React from "react";
import { assets } from "../assets/frontend_assets/assets"; // Make sure hero_img is added properly

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full border">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-16 py-16">
        {/* Line and subtitle */}
        <div className="mb-3 flex items-center gap-2">
          <div className="w-10 h-px bg-gray-700" />
          <p className="text-sm tracking-widest text-gray-700 font-semibold">
            OUR BESTSELLERS
          </p>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-serif text-gray-800 mb-6">
          Latest Arrivals
        </h1>

        {/* Button */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <p className="text-sm font-semibold text-gray-900 group-hover:underline">
            SHOP NOW
          </p>
          <div className="w-10 h-px bg-gray-700 group-hover:w-12 transition-all duration-300" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-pink-100">
        <img
          src={assets.hero_img}
          alt="Model"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

