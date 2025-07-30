import React from "react";

const Newsletter = () => {
  return (
    <div className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Subscribe now & get 20% off
      </h2>
      <p className="text-gray-500 text-sm mt-2 mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center border border-gray-300 rounded overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 text-sm text-gray-700 outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-2 font-semibold hover:bg-gray-800 transition-all"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
