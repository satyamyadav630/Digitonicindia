import React from "react";
import HeroImage from "../Component/HeroImage";
import logo5 from "../assets/logo5.jpg"; // image path

const AboutUs = () => {
  return (
    <>
      <HeroImage title="About Us" imageUrl={logo5} />
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="space-y-4">
          {/* Your form here */}
        </form>
      </section>
    </>
  );
};

export default AboutUs;
