import React from "react";
// import Hero1 from './Component/Hero1'

import Link from "next/link";
import HeroSection from "../Component/HeroSection";

const page = () => {
  return (
    <div>
      <HeroSection imageSrc="/images/logo6.webp" title="Services" />
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 mt-14 ">
          {/* Vision */}
          <div className="bg-white cursor-default p-6 rounded-2xl shadow-md hover:shadow-xl h-60 md:h-80 lg:h-96 transition border-2  hover:scale-110 border-l-bluebrand border-b-bluebrand ">
            <h3 className="text-xl md:text-2xl font-semibold text-bluebrand ">
              Project Development 🧑🏻‍💻
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              Our project development process focuses on building future-ready
              digital solutions that solve real-world challenges and create
              lasting impact for businesses and communities. We emphasize
              innovation, usability, and performance to deliver products that
              stand out in the digital ecosystem while addressing real problems
              effectively and helping industries move toward smarter,
              sustainable growth.
            </p>
            <Link
              href="/services/devlopment"
              className="inline-block  px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Mission */}
          <div className="bg-white cursor-default p-6 rounded-2xl shadow-md hover:shadow-xl h-60 md:h-80 lg:h-96 transition border-2  hover:scale-110 border-l-bluebrand border-b-bluebrand  ">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand  ">
              Industrial Training 👨🏻‍🏫
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              Our industrial training program prepares learners to develop
              future-ready digital solutions that address industry challenges
              with practical, hands-on experience. Participants gain exposure to
              real-world projects, modern tools, and emerging technologies,
              empowering them to think creatively, solve real problems, and
              build impactful solutions that bridge the gap between academic
              knowledge needs.
            </p>
            <Link
              href="/services/job"
              className="inline-block  px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Values */}
          <div className="bg-white p-6 cursor-default rounded-2xl shadow-md h-60 md:h-80 lg:h-96 hover:shadow-xl transition border-2  hover:scale-110 border-l-bluebrand border-b-bluebrand ">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand">
              Internship 🎓
            </h3>
            <p className="text-gray-600 mb-10 md:mt-5 text-base leading-relaxed text-justify">
              Our internship program focuses on nurturing talent through
              real-world exposure in building future-ready digital solutions.
              Interns work on live projects that solve real problems, gaining
              valuable technical and professional skills. The experience helps
              them understand industry standards, improve creativity, and
              contribute meaningfully to businesses and communities through
              innovation and collaboration.
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
