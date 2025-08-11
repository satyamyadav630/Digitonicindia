import React from "react";
import HeroImage from "../Component/HeroImage";
import logo6 from "../assets/logo6.jpg"; // image path

const Services = () => {
  return (
    <>
      <HeroImage title="Services" imageUrl={logo6} />
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="space-y-4">{/* Your form here */}</form>
      </section>
    </>
  );
};

export default Services;
