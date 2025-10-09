"use client";
import React from "react";
import Link from "next/link";

import {
  FaAws, FaGoogle, FaMicrosoft, FaCloudflare, FaDocker, FaReact, FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiKubernetes, SiMongodb, SiMysql, SiPostgresql,

} from "react-icons/si";

const platforms = [
  { name: "AWS", icon: <FaAws size={50} color="#1691fd" />, path: "/big-data" },
  { name: "Google Cloud", icon: <FaGoogle size={45} color="#FFA500" />, path: "/google-cloud" },
  { name: "Microsoft Azure", icon: <FaMicrosoft size={45} color="#FFA500" />, path: "/azure" },
  { name: "Cloudflare", icon: <FaCloudflare size={50} color="#FFA500" />, path: "/cloudflare" },
  { name: "Docker", icon: <FaDocker size={50} color="#FFA500" />, path: "/docker" },
  { name: "Kubernetes", icon: <SiKubernetes size={50} color="#FFA500" />, path: "/kubernetes" },
  { name: "React", icon: <FaReact size={50} color="#FFA500" />, path: "/react" },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#FFA500" />, path: "/nodejs" },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#FFA500" />, path: "/mongodb" },
  { name: "MySQL", icon: <SiMysql size={50} color="#FFA500" />, path: "/mysql" },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} color="#FFA500" />, path: "/postgresql" },
  { name: "Python", icon: <FaPython size={50} color="#FFA500" />, path: "/python" },
  // { name: "Django", icon: <SiDjango size={45} color="#FF9900" />, path: "/django" },
  // // { name: "TensorFlow", icon: <SiTensorflow size={45} color="#FF9900" />, path: "/tensorflow" },
  // { name: "PyTorch", icon: <SiPytorch size={50} color="#FF9900" />, path: "/pytorch" },
  // { name: "WordPress", icon: <FaWordpress size={50} color="#FF9900" />, path: "/wordpress" },
];

export default function Platforms() {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center sm:text-3xl text-gray-800 md:text-4xl mb-4">
        Platforms We Work On
      </h2>
      <p className="text-gray-600 text-base sm:text-sm md:text-lg text-center mb-14 leading-relaxed">
    Over the years we have done many things that we are proud of. 
    This motivates us to continue <br /> looking for new challenges 
    in order to improve our services.
  </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 max-w-6xl mx-auto place-items-center">
        {platforms.map((p, index) => (
          <Link
            key={index}
            href={p.path}
            className="flex flex-col items-center justify-center cursor-pointer 
                       w-28 h-28 md:h-48 md:w-40 sm:w-32 sm:h-32  border-spacing-2
                       bg-white shadow-lg transition-transform duration-500 
                       hover:scale-110  hover:shadow-2xl border-2 border-b-blue-500  border-r-blue-500 border-l-green-500 border-t-green-500  rounded-lg  ease-in-out "
          >
            {p.icon}
            <span className="mt-4 text-sm font-bold text-gray-800 text-center">
              {p.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
