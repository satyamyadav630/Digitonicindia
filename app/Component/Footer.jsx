"use client"; // because this component uses client-side JS

import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-1 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          {/* 
          <h2 className="text-3xl font-bold text-white tracking-wide">Digitonicindia</h2> */}
            <h1 className="flex items-center text-2xl font-josefin  font-semibold  ">
            <span className=" text-primary ">DIGI</span>
            {/* <span className="text-yellow-600"></span> */}
            <span className="text-bluebrand">T</span>
            <span className=" text-bluebrand">
              <i className="fa-solid fa-earth-americas animate-spin " style={{ fontSize: "23px" }}></i>
            </span>
            <span className="text-bluebrand">NIC</span>
            <span className="text-primary ml-2"> INDIA</span>
          </h1>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Your trusted IT partner for web, mobile, and cloud solutions.
            Delivering innovative technology for your business growth.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Website Development</li>
            <li className="hover:text-blue-400 cursor-pointer">Mobile App Development</li>
            <li className="hover:text-blue-400 cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-blue-400 cursor-pointer">SEO Optimization</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-5 mt-2">
            {[
              { icon: <Facebook />, link: "#" },
              { icon: <Twitter />, link: "#" },
              { icon: <Linkedin />, link: "#" },
              { icon: <Mail />, link: "mailto:info@jjcommunication.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/50"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates about our latest services and offers.
          </p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none w-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-blue-600 transition-all mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Digitonicindia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
