import React from "react";
// import Hero1 from './Component/Hero1'

import Link from "next/link";
import HeroSection from "../Component/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection imageSrc="/images/logo6.webp" title="Services" />
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 mt-14 cursor-pointer">
          {/* Vision */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl h-60 md:h-80 lg:h-96 transition border-2  hover:scale-110 border-l-bluebrand border-b-bluebrand ">
            <h3 className="text-xl md:text-2xl font-semibold text-bluebrand mb-8">
              Development 🧑🏻‍💻
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities To build
              future-ready digital solutions that solve real problems eao build
              future-ready digital solutions that solve real problemste lasting
              impact for businesses and communities thats why we refer and
              communities thats why we refers ..
            </p>
            <Link
              href="/services/devlopment"
              className="inline-block  px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Mission */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-60 md:h-80 lg:h-96 hover:shadow-xl transition border-2 hover:scale-110 border-l-bluebrand border-b-bluebrand ">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand mb-3 ">
              Jobs 🔰
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities To build
              future-ready digital solutions that solve real problems eao build
              future-ready digital solutions that solve real problemste lasting
              impact for businesses and communities thats why we refer and
              communities thats why we refers ..
            </p>
            <Link
              href="/services/job"
              className="inline-block  px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-60 md:h-80 lg:h-96 hover:shadow-xl transition border-2  hover:scale-110 border-l-bluebrand border-b-bluebrand ">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand mb-8">
              Internship 🎓
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities To build
              future-ready digital solutions that solve real problems eao build
              future-ready digital solutions that solve real problemste lasting
              impact for businesses and communities thats why we refer and
              communities thats why we refers ..
            </p>
            <Link
              href="/services/internship"
              className="inline-block  px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
