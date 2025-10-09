"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, img, url, description }) {
  return (
    <Link
      href={url}
      className="relative  md:w-72 md:h-72 mx-auto block rounded-xl overflow-hidden shadow-lg group cursor-pointer"
    >
      {/* Background image */}
      <Image
        src={img}
        alt={title}
        className="w-full h-56 md:h-72  object-cover transition-transform duration-300 group-hover:scale-110 brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-lg">{description}</p>
         
</div>
      
    </Link>
  );
}
