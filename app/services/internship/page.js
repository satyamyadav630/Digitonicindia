"use client";

import { useEffect } from "react";
// import Image from "next/image";

// import HeroSection from "../Component/HeroSection";
const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
    

      <section className="py-12 mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Internship Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
            Join Our Internship Program
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Kickstart your career in IT with hands-on experience in real-world projects.
            We offer internships in Web Development, Mobile App Development, UI/UX Design, and Cloud Solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-blue-800">📅 Duration</h3>
              <p className="text-sm sm:text-base">1 to 3 months (Flexible)</p>
            </div>

            <div className="p-5 sm:p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-blue-800">🎯 Eligibility</h3>
              <p className="text-sm sm:text-base">
                BCA, MCA, B.Tech, M.Tech, or related fields
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-blue-800">💼 Benefits</h3>
              <p className="text-sm sm:text-base">
                Certificate, Live Projects, Career Guidance
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6">
            Apply for Internship
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg text-sm sm:text-base"
            />
            <select className="w-full p-3 border rounded-lg text-sm sm:text-base">
              <option>Select Internship Field</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>Cloud Solutions</option>
            </select>
            <textarea
              placeholder="Why should we select you?"
              rows="4"
              className="w-full p-3 border rounded-lg text-sm sm:text-base"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Internship;
