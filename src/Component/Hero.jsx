// src/Component/Hero.jsx
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from assets
import logo from "../assets/logo1.webp";
import Logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";

const Hero = () => {
  const slides = [
    {
      image: logo,
      title: "Web Development",
      description:
        "We are a Web Development Company, helping and consulting our clients with Custom Web Development, Mobile App Development and SEO.",
    },
    {
      image: Logo2,
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
    speed:1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-0" />

              {/* Content */}
              <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
                  {slide.description}
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
