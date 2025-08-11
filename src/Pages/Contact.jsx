import React from "react";
import HeroImage from "../Component/HeroImage";
import logo7 from "../assets/logo7.webp";;

const Contact = () => {
  return (
    <>
      <HeroImage title="Contact Us" imageUrl={logo7} />
      
      <section className="py-16 px-6 max-w-3xl mx-auto ">
        <form className=" bg-gray-100 space-y-6  p-8 rounded-xl shadow-2xl ">
          
          {/* Title */}
          <p className="text-5xl font-bold text-center bg-blue-400  bg-clip-text text-transparent">
            Let's Talk?
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg  text-gray-900 placeholder-gray-300 border border-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-white/5 text-gray-900 placeholder-gray-300 border border-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-white/5 text-gray-500 placeholder-gray-300 border border-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* Message */}
          <textarea
            placeholder="XYZ"
            rows="5"
            className="w-full p-4 rounded-lg bg-white/5 text-gray-900 placeholder-gray-300 border border-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
       
      </section>
       <div className="w-full mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2611.4599179425036!2d80.9958310151135!3d26.958303521224146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sintegral%20university!5e0!3m2!1sen!2sin!4v1754911588741!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
          className="block"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
