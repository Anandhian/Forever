import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-black">
            FOREVER<span className="text-pink-400">.</span>
          </h1>
          <p className="text-sm mt-4 text-gray-600 leading-relaxed">
            FOREVER is your go-to destination for the latest in fashion, accessories, and lifestyle essentials. 
            We’re committed to delivering quality products, seamless shopping experiences, and top-tier customer support.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>+1-000-000-0000</li>
            <li>support@foreverstore.com</li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-12 text-gray-800">
        <hr className="my-6 border-gray-200" />
        © 2024 FOREVER. All rights reserved. Built with ❤️ by greatstack.dev
      </div>
    </footer>
  );
};

export default Footer;
