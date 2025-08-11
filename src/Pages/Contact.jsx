import React from "react";
import HeroImage from "../Component/HeroImage";
import logo7 from "../assets/logo7.jpg"; // image path

const Contact = () => {
  return (
    <>
      <HeroImage title="Contact Us" imageUrl={logo7} />
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <form className="space-y-4">
          {/* Your form here */}
        </form>
      </section>
    </>
  );
};

export default Contact;
