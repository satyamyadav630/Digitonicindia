// src/Pages/Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../Component/HeroImage";
import logo5 from "../assets/logo5.webp"; // Banner image
import { Link } from "react-router-dom";
import cybersecurity from "../assets/cybersecurity.webp"
import aisupport from "../assets/aisupport.webp"
import cloudmigration from "../assets/cloudmigration.webp"
import mobileview from "../assets/mobileview.webp"
import arvrdevlopment from "../assets/arvrdevlopment.webp"
import seomanagment from "../assets/seomanagment.webp"
import BlogSpotlight from "./BlogSpotlight";

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Cloud Migration for Businesses",
    description:
      "Learn the process, benefits, risks, and best practices for moving your business to the cloud.",
    image: cloudmigration,
    date: "Aug 10, 2025",
    author: "Tech Insights",
    url: "/blog/cloud-migration",
  },
  {
    id: 2,
    title: "Top 10 Cybersecurity Practices Every Company Should Follow",
    description:
      "A step-by-step guide to secure your business systems and protect against cyber threats.",
    image: cybersecurity,
    date: "Aug 05, 2025",
    author: "Security Weekly",
    url: "/blog/cybersecurity-practices",
  },
  {
    id: 3,
    title: "How Generative AI is Transforming the IT Industry in 2025",
    description:
      "Explore AI-powered automation, innovation, and real-world use cases shaping the IT world.",
    image: aisupport,
    date: "Aug 02, 2025",
    author: "AI Digest",
    url: "/blog/generative-ai-2025",
  },
  {
    id: 4,
    title: "AR vs VR",
    description:
      "Compare the features, pricing, and performance of top cloud providers.",
    image: arvrdevlopment,
    date: "Jul 30, 2025",
    author: "Cloud Weekly",
    url: "/blog/cloud-platform-comparison",
  },
  {
    id: 5,
    title: "How to Speed Up Your Website for Better SEO",
    description:
      "Practical tips to improve website performance and boost search engine rankings.",
    image: seomanagment,
    date: "Jul 25, 2025",
    author: "SEO Mastery",
    url: "/blog/website-speed-optimization",
  },
  {
    id: 6,
    title: "Checklist for Launching a Secure Mobile App",
    description:
      "Follow these security measures before launching your mobile application.",
    image:mobileview,
    date: "Jul 20, 2025",
    author: "App Secure",
    url: "/blog/secure-mobile-app-checklist",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Blog1() {
  return (
    <>
      {/* Hero Section */}
      <HeroImage title="Latest Blogs & Insights" imageUrl={logo5} />

      {/* Blog Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
<motion.div
  key={post.id}
  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
  custom={index}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={cardVariants}
>
  {/* Image with angled bottom */}
  <Link to={post.url}>
    <div className="relative w-full h-56 overflow-hidden">
      <motion.img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </Link>

  {/* Content */}
  <div className="p-6">
    <p className="text-sm text-gray-500">{post.date} • {post.author}</p>
    <h3 className="text-xl font-bold text-gray-900 mt-2 hover:text-blue-600 transition-colors duration-300">
      <Link to={post.url}>{post.title}</Link>
    </h3>
    <p className="text-gray-600 mt-3 line-clamp-3">{post.description}</p>
    <Link
      to={post.url}
      className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
    >
      Read More →
    </Link>
  </div>
</motion.div>

          ))}
        </div>
        <BlogSpotlight/>
      </section>
    </>
  );
}
