import React from "react";
import HeroImage from "../Component/HeroImage";
import logo5 from "../assets/logo5.webp"; // image path

const AboutUs = () => {
  return (
    <>
      <HeroImage title="About Us" imageUrl={logo5} />
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="space-y-4 bg-gray-100 p-8 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-blue-700">hello</p>
        </form>
      </section>
    </>
  );
};

export default AboutUs;
