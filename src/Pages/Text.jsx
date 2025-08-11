// src/components/CreativitySection.jsx
import React from "react";

const creativityItems = [
  {
    id: 1,
    title: "AI-powered Chatbots",
    description: "Automate customer service with smart AI chatbots.",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Cloud Migration",
    description: "Seamless migration to cloud platforms with zero downtime.",
    icon: "☁️",
  },
  {
    id: 3,
    title: "Cybersecurity Solutions",
    description: "Protect your data with cutting-edge security measures.",
    icon: "🛡️",
  },
  {
    id: 4,
    title: "Custom Software",
    description: "Tailor-made software solutions for your business needs.",
    icon: "💻",
  },
];

const Text = () => {
  return (
    <>
    <section className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="  font-serif text-5xl font-bold text-center mb-1 text-blue-700">
          Our Creative 
        </h2>
             <hr className="mx-auto  border-0 h-1 mb-10 bg-blue-500 w-64" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {creativityItems.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="
                bg-white p-6 rounded-lg shadow-md 
                transform transition-transform duration-300 ease-in-out
                hover:scale-105 
                hover:shadow-2xl 
                hover:bg-blue-50
                cursor-pointer
              "
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Text;
