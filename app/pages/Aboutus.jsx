"use client";
import Image from "next/image";

export default function Aboutus() {
  return (
    
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 max-w-6xl mx-auto"
    >
      {/* LEFT CONTENT */}
      <div>
        <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-4 rounded-full"></div>

        <h2 className="text-4xl font-bold text-gray-800 mb-2">About Us</h2>
        <h3 className="font-semibold text-gray-700 mb-4">
          Web Development Company in Lucknow | Mobile Application Development
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
         <span className="font-bold">Digitonic</span>  is one of the best Web Development Companies in Lucknow.
          We specialize in SaaS (Software as a Service). Our aim is to combine
          creativity and technology to deliver innovative, high-performance digital
          solutions. We stay ahead of the curve with cutting-edge technology and a
          commitment to excellence.
        </p>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <span className="text-3xl text-cyan-500">🏅</span>
            <div>
              <h4 className="font-semibold text-gray-800">Quality</h4>
              <p className="text-gray-600 text-sm">
                Everything we do has the commitment of a well-trained and motivated team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-3xl text-blue-500">💼</span>
            <div>
              <h4 className="font-semibold text-gray-800">Experience</h4>
              <p className="text-gray-600 text-sm">
                Focused on results, we aim to raise the level of our customers through
                innovative solutions.
              </p>
            </div>
          </div>
        </div>

        <a
          href="/about"
          className="inline-block mt-6 bg-bluebrand text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300"
        >
          Read More
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <Image
          src="/images/aboutusimage1.png" // apni image path yahan do
          alt="About Us"
          width={600}
          height={400}
          className="rounded-lg shadow-sm object-cover"
        />
      </div>
    </section>
  );
}
