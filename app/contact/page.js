// "use client";

// import React, { useEffect } from "react";
// // import Image from "next/image";

// import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
// import HeroSection from "../Component/HeroSection";
// const Contact = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       {/* 🖼 Hero Section */}
//       <HeroSection
//         imageSrc="/images/logo7.webp"
//         title="Contact Us"
//       />

//       {/* Container */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-8">
//           {/* Form */}
//           <form className="w-full md:w-1/2 space-y-6 p-8 rounded-xl shadow-2xl bg-white">
//             <p className="text-5xl font-bold text-center bg-blue-500 bg-clip-text text-transparent">
//               Let's Talk?
//             </p>

//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border-2 border-gray-400 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <div className="relative">
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full border-2 border-gray-400 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border-2 border-gray-400 rounded-md py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <textarea
//               placeholder="Your Message"
//               rows="5"
//               className="w-full p-4 rounded-lg text-gray-900 placeholder-gray-400 border border-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Map */}
//           <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg mt-8 md:mt-0">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2611.4599179425036!2d80.9958310151135!3d26.958303521224146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sintegral%20university!5e0!3m2!1sen!2sin!4v1754911588741!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Our Location"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;
"use client";

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import HeroSection from "../Component/HeroSection";
export default function ContactSection() {
  const [openModal, setOpenModal] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  
  const handleCardClick = () => {
    
    const locationURL = "https://maps.app.goo.gl/dskXMAQbuhiy8GEYA";

   
    window.open(locationURL, "_blank");
  };

  return (
    <>
      {/* 🖼 Hero Section */}
      <HeroSection imageSrc="/images/logo7.webp" title="Contact Us" />

      <div className="bg-gray-50 py-16 flex flex-col items-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          How Can We Help?
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl text-sm md:text-base">
          Talk to one of our consultants today and learn how to start leveraging
          your business.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Phone Card */}
          <div
            // onClick={() => handleCardClick("phone")}
            className="cursor-pointer relative bg-white rounded-2xl shadow-md p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl  hover:bg-green-300 transition-transform duration-300 border-l-4 border-blue-500"
          >
            <div className="text-blue-500 mb-3 flex justify-center">
              <FiPhone size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              +91-9005026400
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4">
              We answer by phone from Monday to Friday from 10 am until 6 pm.
            </p>
            <FiArrowRight className="mx-auto text-gray-400" />
          </div>

          {/* Email Card */}
          <div
            // onClick={() => handleCardClick("email")}
            className="cursor-pointer relative bg-white rounded-2xl shadow-md hover:bg-green-300 p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 border-l-4 border-cyan-500"
          >
            <div className="text-cyan-500 mb-3 flex justify-center">
              <FiMail size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              digitonicindia@gmail.com
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4">
              We will respond to your email within 8 hours on business days.
            </p>
            <FiArrowRight className="mx-auto text-gray-400" />
          </div>

          {/* Location Card */}
          <div
            onClick={() => handleCardClick("map")}
            className="cursor-pointer relative bg-white rounded-2xl hover:bg-green-300 shadow-md p-6 md:p-8 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 border-l-4 border-green-500"
          >
            <div className="text-green-500 mb-3 flex justify-center">
              <FiMapPin size={32} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Our Presence
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4">
              Phase1, Integral university, kurshi road, lucknow - 560037, India
            </p>
            <FiArrowRight className="mx-auto text-gray-400" />
          </div>
        </div>

        {/* Modal for Phone */}
        {openModal === "phone" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Request a Callback
              </h3>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="text"
                placeholder="Preferred time to contact"
                className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Submit Request
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="text-sm text-gray-500 mt-3 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Modal for Email */}
        {openModal === "email" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Send Us a Message
              </h3>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <textarea
                rows="4"
                placeholder="Describe your issue"
                className="w-full border p-2 rounded-lg mb-3 focus:ring-2 focus:ring-cyan-400 outline-none"
              ></textarea>
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:info@innovittglobal.com?subject=Customer Query")
                }
                className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                Send Email
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="text-sm text-gray-500 mt-3 underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center  px-4 py-16">
        {/* Heading */}
        <div className="text-center  max-w-2xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
            Let's Talk?
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Talk to one of our consultants today and learn how to start
            leveraging your business.
          </p>
        </div>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-5xl space-y-4">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg p-3 w-full  focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Select Option */}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Please Choose an Option</option>
            <option value="consulting">Consulting</option>
            <option value="support">Support</option>
            <option value="sales">Internship</option>
            <option value="consulting">Carrer</option>
            <option value="support">Work</option>
            <option value="sales">Others</option>
          </select>

          {/* Message Box */}
          <textarea
            rows={4}
            placeholder="Message"
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Submit Button */}
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
