import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../Component/HeroImage";
import logo6 from "../assets/logo6.webp";
import {
  FiGlobe, FiCloud, FiCpu, FiSmartphone, FiShield, FiTrendingUp, FiVolume2,
  FiSliders, FiCode, FiPieChart, FiTool, FiEye, FiDatabase, FiLayers, FiKey,
  FiLink, FiWifi, FiInfo
} from "react-icons/fi";

// Services Data
const Serving = [
  { id: "01", title: "Website Development", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiGlobe },
  { id: "02", title: "Cloud Services", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiCloud },
  { id: "03", title: "AI & Machine Learning", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiCpu },
  { id: "04", title: "Mobile Development", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiSmartphone },
  { id: "05", title: "Cyber Security", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiShield },
  { id: "06", title: "SEO", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiTrendingUp },
  { id: "07", title: "Digital Marketing", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiVolume2 },
  { id: "08", title: "UI & UX", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiSliders },
  { id: "09", title: "Software Development", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiCode },
  { id: "10", title: "Data Analytics", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiPieChart },
  { id: "11", title: "Maintenance Support", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiTool },
  { id: "12", title: "AR & VR Development", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiEye },
  { id: "13", title: "IT Consulting", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiInfo },
  { id: "14", title: "Networking", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiWifi },
  { id: "15", title: "Database Management", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiDatabase },
  { id: "16", title: "Virtualization", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiLayers },
  { id: "17", title: "API Development", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiLink },
  { id: "18", title: "Blockchain Solutions", description: "Bring To The Table Win-win Survival Strategies To Ensure Proactive Domination.", icon: FiKey },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" }
  })
};

const Services = () => {
  return (
    <>
      <HeroImage title="Services" imageUrl={logo6} />
      <section className="mx-auto">
        <div className="bg-white py-12 px-6 mt-5">
          <motion.div
  className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  {Serving.map((service, index) => {
    const Icon = service.icon;
    return (
      <motion.div
        key={service.id}
        custom={index}
        variants={cardVariants}
        className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl 
                   transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-2 hover:scale-[1.03] group 
                   hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500"
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
          {/* Description */}
          <p className="text-gray-600 flex-1 transition-colors duration-500 group-hover:text-gray-200">
            {service.description}
          </p>
          {/* Icon */}
          <Icon className="w-16 h-16 text-blue-900 transition-colors duration-500 group-hover:text-white" />
        </div>
      </motion.div>
    );
  })}
   </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
