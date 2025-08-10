import React from "react";
import HeroImage from "../Component/HeroImage";
import logo4 from "../assets/logo4.jpg"; // image path

const AboutUs = () => {
  return (
    <>
      <HeroImage title="Contact Us" imageUrl={logo4} />
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="space-y-4">
          {/* Your form here */}
        </form>
      </section>
    </>
  );
};

export default AboutUs;
