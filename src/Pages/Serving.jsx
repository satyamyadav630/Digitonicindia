// src/components/ServiceCardRow.jsx
import React from "react";
import {
  Globe, Cloud,Brain,Smartphone,ShieldCheck,TrendingUp,Megaphone,Palette,Code2,PieChart,Wrench,Gamepad2,} from "lucide-react";

const Serving = [
  {
    id: "01",
    title: "Website Devlopment",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Globe,
  },
  {
    id: "02",
    title: "Cloud Services",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Cloud,
  },
  {
    id: "03",
    title: "AI & Machine Learning",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Brain,
  },
  {
    id: "04",
    title: "Mobile Devlopment",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Smartphone,
  },
  {
    id: "05",
    title: "Cyber Security",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: ShieldCheck,
  },
  {
    id: "06",
    title: "SEO",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: TrendingUp,
  },
  {
    id: "07",
    title: "Digital Marketing",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Megaphone,
  },
  {
    id: "08",
    title: "UI & UX",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Palette,
  },
  {
    id: "09",
    title: "Software Devlopment",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Code2,
  },
  {
    id: "10",
    title: "Data Analytics",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: PieChart,
  },
  {
    id: "11",
    title: "Maintenance Support",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Wrench,
  },
  {
    id: "12",
    title: "AR & VR Development",
    description:
      "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.",
    icon: Gamepad2,
  },
];

export default function ServiceCardRow( ) {
  return (
    <>
     <h1 className="text-5xl font-extrabold text-blue-500 font-serif   text-center mt-10">Our Services</h1>
     <hr className="mx-auto mt-1 border-0 h-1  bg-blue-500 w-64" />
    <div className="bg-white py-8 px-6 mt-2">
     
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 00 gap-8">
        {Serving.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="relative bg-white p-6 rounded-2xl shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 group hover:bg-blue-500"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 right-6 bg-white rounded-full shadow-lg p-4 w-14 h-14 flex items-center justify-center font-bold text-gray-700 transition-all duration-500 group-hover:bg-green-500 group-hover:text-white">
                {service.id}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-500 group-hover:text-white">
                {service.title}
              </h3>

              {/* Content Row */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: Description */}
                <p className="text-gray-600 flex-1 transition-colors duration-500 group-hover:text-gray-200">
                  {service.description}
                </p>

                {/* Right: Icon */}
                <Icon className="w-16 h-16 text-blue-900 transition-colors duration-500 group-hover:text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
