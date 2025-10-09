// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { services } from "../../servicesdata"; // adjust path if needed

// export default function devlopment() {
//   return (
//     <section className="py-16 px-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">DEVLOPMENT</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <Link
//             key={index}
//             href={service.url}
//             className="relative block rounded-xl overflow-hidden shadow-lg group h-72"
//           >
//             {/* Full background image */}
//             <Image
//               src={service.img}
//               alt={service.title}
//               fill
//               className="object-cover transition-transform duration-300 group-hover:scale-105"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 group-hover:bg-opacity-50">
//               <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
//               <p className="text-white text-base">{service.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import { services } from "../../servicesdata";
import ServiceCard from '../../Component/ServiceCard';
import React from 'react'




      
      
      const page = () => {
        return (
         <section className="p-10 mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            img={service.img}
            url={service.url}
            description={service.description}
          />
        ))}
      </section>
        )
      }
      
      export default page