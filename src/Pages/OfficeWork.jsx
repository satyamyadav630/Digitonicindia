import React from "react";
import officework from "../assets/officework.webp";

const features = [
  {
    title: "Flexible Solutions",
    description: "Maecenas tempus, tellus eget condime honcus sem quam semper",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L15 12 9.75 7v10z" />
      </svg>
    ),
  },
  {
    title: "24/7 Unlimited Support",
    description: "Maecenas tempus, tellus eget condime honcus sem quam semper",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const OfficeWork = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Text */}
      <div className="md:w-1/2">
        <h3 className="text-blue-600 font-semibold mb-2">Why Choose Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We execute our ideas from the start to finish.
        </h2>
        <p className="text-gray-600 mb-6">
          Maecenas tempus, tellus eget condime honcus semgs semper libero sit amet adipiscingem neque.
        </p>

        {/* Features */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image (Simple Square with Hover Effect) */}
      <div className="md:w-1/2 relative">
        <div className="relative w-[50] h-80  overflow-hidden rounded-lg group shadow-lg">
          <img
            src={officework}
            alt="Team working"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500"></div>
          {/* Border on hover */}
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default OfficeWork;
