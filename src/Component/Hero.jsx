import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Logo from "../assets/logo.png";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      image: logo1,
      title: "Web Development",
      description:
        "We are a Web Development Company, helping and consulting our clients with Custom Web Development, Mobile App Development and SEO.",
    },
    {
      image: logo2,
      title: "Mobile App Solutions",
      description:
        "Delivering scalable and intuitive mobile applications to drive business results and user engagement.",
    },
    {
      image: logo3,
      title: "Cloud and SEO Services",
      description:
        "We provide cloud infrastructure setup and search engine optimization services to grow your brand digitally.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Logo Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={Logo}
              alt="Site Logo"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-28 h-28 sm:w-40 sm:h-40 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Slider */}
      {!showIntro && (
        <section className="relative h-[85vh] sm:h-screen w-full overflow-hidden">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="h-[85vh] sm:h-screen w-full bg-cover bg-center flex items-center justify-center relative"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 z-0" />

                  {/* Content */}
                  <div className="relative z-10 text-center text-white px-4 sm:px-8">
                    <motion.h1
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-400 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-4 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl mx-auto text-gray-100"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm sm:text-base font-medium transition"
                    >
                      Our Services
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </section>
      )}
    </>
  );
};

export default Hero;
