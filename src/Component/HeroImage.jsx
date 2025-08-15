// src/components/HeroImage.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroImage = ({ title, imageUrl }) => {
  return (
    <div
      className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Empowering ideas with cutting-edge digital solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroImage;
