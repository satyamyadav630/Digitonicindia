"use client";
import Image from "next/image";
import React from "react";

const HeroSection = ({ imageSrc, title }) => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover brightness-75" 
        priority
      />

      {/* Overlay Text */}
      <div className="relative z-10">
               <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  p-2 rounded-md font-extrabold text-white 
          tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.5) ] 
          "
          style={{
            textShadow: "0 0 12px rgba(255,255,255,0.4), 0 0 20px rgba(0,200,255,0.3)",
          }}
        >
          
          {title}
          
        </h1>

      </div>
    </div>
  );
};

export default HeroSection;
