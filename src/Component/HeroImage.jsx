// src/components/HeroImage.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroImage = ({ title, imageUrl }) => {
  return (
    <div
      className="relative w-full h-[75vh] bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black bg-opacity-40 p-6 rounded text-white text-center"
      >
        <p className="text-8xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">{title}</p>
      </motion.div>
    </div>
  );
};

export default HeroImage;
