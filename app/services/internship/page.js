import React from 'react'
import Link from "next/link";
const page = () => {
  return (
    
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
    {/* Project Training */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-l-bluebrand border-b-bluebrand flex flex-col justify-between h-[250px]">
      <div>
        <h3 className="text-2xl font-semibold text-bluebrand mb-4">
          Acadmic Internship 🖥️
        </h3>
        <p className="text-gray-600 text-base leading-relaxed text-justify">
          To build future-ready digital solutions that solve real problems and create lasting impact for businesses and communities. We prepare learners with practical, project-based skills essential for modern IT industries.
        </p>
      </div>
      <Link
        href="/services/devlopment"
        className="inline-block mt-6 self-start px-6 py-2  rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
      >
        Explore More →
      </Link>
    </div>

    {/* Industrial Training */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 border-2 border-l-bluebrand border-b-bluebrand flex flex-col justify-between h-[250px]">
      <div>
        <h3 className="text-2xl font-semibold text-bluebrand mb-4">
          Industrial Internship 👨🏻‍🏫
        </h3>
        <p className="text-gray-600 text-base leading-relaxed text-justify">
          To build future-ready digital solutions that solve real problems and create lasting impact for businesses and communities. Learn industrial-level techniques, teamwork, and tools through real-world training sessions.
        </p>
      </div>
      <Link
        href="/services/job"
        className="inline-block mt-6 self-start px-6 py-2 rounded-full bg-bluebrand text-white font-medium shadow-md hover:bg-primary active:scale-95 transition"
      >
        Explore More →
      </Link>
    </div>
  </div>
</div>

       
  )
}

export default page