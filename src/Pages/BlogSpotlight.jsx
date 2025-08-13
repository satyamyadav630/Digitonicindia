// src/components/NewsCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Dummy News Data
const newsItems = [
  {
    id: 1,
    title: "AI Revolution in IT Services",
    date: "Aug 12, 2025",
    description: "AI is reshaping IT operations and customer experience globally.",
    image: "/images/ai-news.jpg"
  },
  {
    id: 2,
    title: "Cybersecurity Alert 2025",
    date: "Aug 10, 2025",
    description: "Major threats and how companies can stay protected.",
    image: "/images/cyber-news.jpg"
  },
  {
    id: 3,
    title: "Cloud Adoption Hits Record High",
    date: "Aug 08, 2025",
    description: "Businesses are moving to the cloud faster than ever before.",
    image: "/images/cloud-news.jpg"
  },
  {
    id: 4,
    title: "5G Expansion Boosts IoT",
    date: "Aug 05, 2025",
    description: "Faster networks mean smarter connected devices.",
    image: "/images/5g-news.jpg"
  },
  {
    id: 5,
    title: "AR & VR Changing Work Culture",
    date: "Aug 02, 2025",
    description: "Immersive tech is redefining remote collaboration.",
    image: "/images/arvr-news.jpg"
  },
  {
    id: 6,
    title: "Green Data Centers",
    date: "Jul 30, 2025",
    description: "Eco-friendly solutions in IT infrastructure.",
    image: "/images/green-news.jpg"
  },
  {
    id: 7,
    title: "Quantum Computing Breakthrough",
    date: "Jul 28, 2025",
    description: "Next-gen computing power is becoming a reality.",
    image: "/images/quantum-news.jpg"
  },
  {
    id: 8,
    title: "Blockchain Beyond Crypto",
    date: "Jul 25, 2025",
    description: "New industries adopting blockchain technology.",
    image: "/images/blockchain-news.jpg"
  }
];

// Animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BlogSpotlight() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Tech News</h2>

      <Slider {...settings}>
        {newsItems.map((news) => (
          <motion.div
            key={news.id}
            className="p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
              {/* Image with angle cut */}
              <div className="relative w-full h-48 overflow-hidden">
                <motion.img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-gray-500">{news.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{news.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-2">{news.description}</p>
                <button className="mt-3 text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
