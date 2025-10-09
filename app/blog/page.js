"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "../Component/HeroSection";

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Cloud Migration for Businesses",
    description:
      "Learn the process, benefits, risks, and best practices for moving your business to the cloud.",
    image: "/images/cloudmigration.webp",
    date: "Aug 10, 2025",
    author: "Tech Insights",
    url: "/blog/cloud-migration",
  },
  {
    id: 2,
    title: "Top 10 Cybersecurity Practices Every Company Should Follow",
    description:
      "A step-by-step guide to secure your business systems and protect against cyber threats.",
    image: "/images/cybersecurity.webp",
    date: "Aug 05, 2025",
    author: "Security Weekly",
    url: "/blog/cybersecurity-practices",
  },
  {
    id: 3,
    title: "How Generative AI is Transforming the IT Industry in 2025",
    description:
      "Explore AI-powered automation, innovation, and real-world use cases shaping the IT world.",
    image: "/images/aisupport.webp",
    date: "Aug 02, 2025",
    author: "AI Digest",
    url: "/blog/generative-ai-2025",
  },
  {
    id: 4,
    title: "AR vs VR",
    description:
      "Compare the features, pricing, and performance of top cloud providers.",
    image: "/images/arvrdevlopment.webp",
    date: "Jul 30, 2025",
    author: "Cloud Weekly",
    url: "/blog/cloud-platform-comparison",
  },
  {
    id: 5,
    title: "How to Speed Up Your Website for Better SEO",
    description:
      "Practical tips to improve website performance and boost search engine rankings.",
    image: "/images/seomanagment.webp",
    date: "Jul 25, 2025",
    author: "SEO Mastery",
    url: "/blog/website-speed-optimization",
  },
  {
    id: 6,
    title: "Checklist for Launching a Secure Mobile App",
    description:
      "Follow these security measures before launching your mobile application.",
    image: "/images/mobileview.webp",
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

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection imageSrc="/images/logo10.jpg" title="Blogs" />

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
              <Link href={post.url}>
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                      }}
                      priority
                    />
                  </motion.div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500">
                  {post.date} • {post.author}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-2 hover:text-blue-600 transition-colors duration-300">
                  <Link href={post.url}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mt-3 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={post.url}
                  className="inline-block mt-4 text-red-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

       
      </section>
    </>
  );
}
