import React from "react";
import HeroImage from "../Component/HeroImage";
import logo8 from "../assets/logo8.webp"; // image path

const timelineData = [
  { year: "2018", event: "Company Founded with 3 members" },
  { year: "2019", event: "First major client onboarded" },
  { year: "2020", event: "Expanded to mobile app development" },
  { year: "2022", event: "Crossed 50 successful projects" },
];

const teamMembers = [
  {
    name: "Mirza Beg",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    funFact: "Coffee lover & chess enthusiast",
  },
  {
    name: "Adersh Yadav",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    funFact: "Open-source contributor and marathon runner",
  },
  {
    name: "Satyam Yadav",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    funFact: "Sketches UI concepts on napkins!",
  },
];

const technologies = [
  {
    name: "React",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg" ,
  },
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
];

const AboutUs = () => {
  return (
    <>
      <HeroImage title="About Us" imageUrl={logo8} />

      <section className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Company Timeline */}
        <div>
          <h2 className="text-4xl font-bold font-serif  text-indigo-500 mb-1 text-center">
            Our Journey
          </h2>
              <hr className="mx-auto mt-1 border-0 h-1 outline-none mb-8 bg-blue-500 w-44" />
          <ol className="relative border-l-4 border-indigo-600 max-w-4xl mx-auto">
            {timelineData.map(({ year, event }, idx) => (
              <li key={idx} className="mb-10 ml-6 relative">
                <div className="absolute -left-9 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-semibold shadow-lg">
                  {year}
                </div>
                <p className="text-lg text-gray-800 font-medium ml-4">{event}</p>
                <div className="w-1 h-full bg-indigo-200 absolute left-1.5 top-12"></div>
              </li>
            ))}
          </ol>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold font-serif cursor-pointer text-indigo-500 mb-1 text-center">
            Meet Our Team
          </h2>
    <hr className="mx-auto mt-1 border-0 h-1 mb-8 bg-blue-500 w-40" />
          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map(({ name, role, img, funFact }, idx) => (
              <div
                key={idx}
                className="max-w-xs bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-indigo-500 transition-shadow"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover mb-6 ring-4 ring-indigo-300"
                />
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <p className="text-indigo-600 font-semibold mb-3">{role}</p>
                <p className="italic text-gray-600">"{funFact}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h2 className="text-4xl font-bold font-serif  text-indigo-500 mb-1 text-center">
            Our Technologies
          </h2>
              <hr className="mx-auto mt-1 border-0 h-1 mb-8 bg-blue-500 w-60" />
          <div className="flex flex-wrap justify-center gap-16 max-w-5xl mx-auto items-center">
            {technologies.map(({ name, logo }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-28 p-4 rounded-3xl hover:shadow-lg transition cursor-default bg-white"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-20 h-20 object-contain mb-3"
                  loading="lazy"
                />
                <p className="font-semibold text-gray-800 text-lg">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
