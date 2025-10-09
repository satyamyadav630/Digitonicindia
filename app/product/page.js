import Image from "next/image";
import HeroSection from "../Component/HeroSection";

const projects = [
  {
    id: 1,
    title: "EcoCart – E-Commerce Website",
    category: "Web Development",
    img: "/images/project1.jpg",
    desc: "A responsive online store for eco-friendly and handmade products built with React and Tailwind.",
  },
  {
    id: 2,
    title: "DocLink – Doctor Appointment App",
    category: "App Development",
    img: "/images/project2.jpg",
    desc: "A full-featured mobile app for booking and managing doctor appointments.",
  },
  {
    id: 3,
    title: "Yatra Mate – Travel Planner",
    category: "Web App",
    img: "/images/project1.jpg",
    desc: "A travel planning platform for discovering routes, hotels, and destinations across India.",
  },
];

export default function product() {
  return (
    <>
     <HeroSection imageSrc="/images/logo9.jpg" title="Our Products" />
    <section className="mt-5 py-16" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-bluebrand">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’ve helped businesses and startups turn their ideas into digital
            products — from websites to mobile apps.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-bluebrand font-medium mb-2">
                  {item.category}
                </p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
