// src/components/HeroImage.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroImage = ({ title, imageUrl }) => {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-40 p-6 rounded text-white text-center"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
      </motion.div>
    </div>
  );
};

export default HeroImage;
