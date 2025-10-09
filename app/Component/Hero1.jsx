"use client";

import React from "react";
import Image from "next/image";

const Hero1 = () => {
  return (
    <section className="bg-gradient-to-br from-white  to-blue-400 min-h-screen flex items-center ">

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 mt-12">



        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center text-3xl font-josefin lg:text-6xl md:text-3xl  text-bluebrand leading-snug">
            {/* <Image
              src="/images/yellowbrust1.png"
              alt=""
              width={60}
              height={60}
              className="rotate-180 w-8 h-8 lg:w-14 lg:h-16 mr-2"
            /> */}
            A New Way of
          </span>

          <br />

          <span className="inline-flex items-center lg:ml-10 gap-2 text-3xl lg:text-5xl md:text-4xl font-josefin  text-bluebrand leading-snug mt-2">
            Digital <span className="text-primary ">Literacy</span>
            {/* <Image
              src="/images/yellowbrust2.png"
              alt=""
              width={60}
              height={60}
              className="w-8 h-8 lg:w-14 lg:h-16 pt-5"
            /> */}
          </span>

          <p className="mt-4 text-black max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis repudiandae tempora architecto iste, commodi eum ipsa tenetur deleniti dolorem incidunt vero ea exercitationem placeat id ex!          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-bluebrand hover:bg-blue-700 text-white px-3 py-3 rounded-lg shadow-md w-32 md:w-52">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0">
          <Image
            src="/images/heroImg.png"
            alt="Hero Illustration"
            width={550}
            height={550}
            className="w-[350px] h-[400px] md:w-[450px] lg:w-[600px] lg:h-[550px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero1;
