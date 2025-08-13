import React from "react";
import {
  FaAws, FaGoogle, FaMicrosoft, FaCloudflare, FaDocker, FaReact, FaNodeJs,
  FaPython, FaWordpress 
} from "react-icons/fa";
import {
  SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiDjango,
  SiTensorflow, SiPytorch
} from "react-icons/si";
import { motion } from "framer-motion";

const platforms = [
  { name: "AWS", icon: <FaAws size={50} color="#FF9900" /> },
  { name: "Google Cloud", icon: <FaGoogle size={50} color="#4285F4" /> },
  { name: "Microsoft Azure", icon: <FaMicrosoft size={50} color="#0078D7" /> },
  { name: "Cloudflare", icon: <FaCloudflare size={50} color="#F38020" /> },
  { name: "Docker", icon: <FaDocker size={50} color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color="#326CE5" /> },
  { name: "React", icon: <FaReact size={50} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#4169E1" /> },
  { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
  { name: "Django", icon: <SiDjango size={50} color="#092E20" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={50} color="#FF6F00" /> },
  { name: "PyTorch", icon: <SiPytorch size={50} color="#EE4C2C" /> },
  { name: "WordPress", icon: <FaWordpress size={50} color="#21759B" /> },
  // { name: "Shopify", icon: <FaShopify size={50} color="#7AB55C" /> },
  // { name: "Figma", icon: <FaFigma size={50} color="#F24E1E" /> },
];

export default function Platforms() {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Platforms We Work On
      </h2>



<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto place-items-center">
  {platforms.map((p, index) => (
    <motion.div
      key={index}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.3 }} // once:false = baar-baar jab aaye tab chale
      transition={{ duration: 0.15, delay: index * 0.05 }}
      className="flex flex-col items-center justify-center cursor-pointer w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 bg-white shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-2xl"
    >
      {p.icon}
      <span className="mt-2 text-sm font-medium text-gray-700 text-center">{p.name}</span>
    </motion.div>
  ))}
</div>

    </div>
  );
}
