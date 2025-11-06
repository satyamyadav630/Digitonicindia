import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Project Training */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-l-bluebrand border-b-bluebrand flex flex-col justify-between h-[270px]">
          <div>
            <h3 className="text-2xl font-semibold text-bluebrand mb-4">
              Project Training 🖥️
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              We focus on developing future-ready digital solutions that solve
              real challenges. Our project training builds creativity, technical
              expertise, and innovation, empowering learners to create impactful
              products that benefit businesses, communities, and drive
              sustainable digital transformation.
            </p>
          </div>
          <Link
            href="/services/job/project"
            className="inline-block mt-6 self-start px-6 py-2  rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
          >
            Explore More →
          </Link>
        </div>

        {/* Industrial Training */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-l-bluebrand border-b-bluebrand flex flex-col justify-between h-[270px]">
          <div>
            <h3 className="text-2xl font-semibold text-bluebrand mb-4">
              Industrial Training 👨🏻‍🏫
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              Our industrial training provides practical exposure to real-world
              projects, preparing learners for industry demands. It enhances
              technical knowledge, teamwork, and innovation skills, enabling
              participants to build impactful digital solutions and bridge the
              gap between theory and practice.
            </p>
          </div>
          <Link
            href="/services/job/industrial"
            className="inline-block mt-6 self-start px-6 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
          >
            Explore More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
