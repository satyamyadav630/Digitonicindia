"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSection from "../Component/HeroSection";
// import aboutImg from "./public/images/Aboutusimage.jpg";

const About = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 🖼 Hero Section */}
      <HeroSection imageSrc="/images/logo8.webp" title="About Us" />

      {/* Main Content */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-4">
            About{" "}
            <span className="text-bluebrand animate-bounce inline-block">
              Digitonic
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are a passionate team of innovators turning ideas into powerful
            digital experiences. At Digitonic, we empower businesses and
            individuals through{" "}
            <span className="font-semibold">
              web development, mobile apps, cloud solutions, and growth
              strategies
            </span>
          </p>
        </div>

        {/* Vision - Mission - Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl h-60 md:h-80 lg:h-96  hover:scale-110 transition">
            <h3 className="text-xl md:text-2xl font-semibold text-bluebrand mb-3">
              🚀 Vision
            </h3>
            <p className="text-gray-600 mb-1 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communitiesTo build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities thats why we refer  and communities thats why we refers
              ..
            </p>
            <Link
              href="/about/vision"
              className="inline-block mt-2 px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md h-60 md:h-80 lg:h-96 hover:shadow-xl cursor-pointer   hover:scale-110 transition">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand mb-3">
              🎯 Mission
            </h3>
            <p className="text-gray-600 mb-1 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communitiesTo build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities thats why we refer  and communities thats why we refers
              ..
            </p>
            <Link
              href="/about/mission"
              className="inline-block mt-2 px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-2xl shadow-md h-60 md:h-80 lg:h-96 hover:shadow-xl cursor-pointer   hover:scale-110 transition">
            <h3 className="text-xl md:text-2xl  font-semibold text-bluebrand mb-3">
              🌱 Values
            </h3>
            <p className="text-gray-600 mb-1 md:mt-5 text-base leading-relaxed text-justify">
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities
              To build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communitiesTo build future-ready digital solutions that solve real problems
              and create lasting impact for businesses and communities thats why we refer  and communities thats why we refers
              ..
            </p>
            <Link
              href="/about/value"
              className="inline-block mt-2 px-5 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
            >
              Explore More →
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
              {/* Left Image */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/images/contactus.png"
                  alt="About Us Illustration"
                  width={400}
                  height={400}
                  className="w-full max-w-md rounded-2xl"
                />
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Choose <span className="text-primary">Us?</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed text-justify mb-4">
                  We stand out because of our commitment to quality, innovation,
                  and customer satisfaction. Our solutions are designed to
                  empower businesses with cutting-edge technology and a
                  human-first approach empower businesses with cutting-edge technology and aempower businesses with cutting-edge technology and aempower businesses with cutting-edge technology and aempower businesses with cutting-edge technology and a.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>✔ Trusted by clients nationwide</li>
                  <li>✔ Innovative solutions tailored to your needs</li>
                  <li>✔ Dedicated support & services</li>
                </ul>

                {/* Contact Button */}
                <button
                  onClick={() => router.push("/contact")}
                  className="px-6 py-3 bg-bluebrand text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition mt-6"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>
          {/* Closing Line */}
          <div className="text-center mt-5">
            <p className="text-lg text-gray-700 font-medium">
              ✨ Let’s grow your digital journey together with{" "}
              <span className=" text-primary pb-5 font-bold">
                {" "}
                Digitonic <span className="text-bluebrand">india</span>{" "}
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
