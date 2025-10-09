import React from 'react'
import Hero1 from './Component/Hero1'
// import Services from './Component/Services'
import ServiceCard from './Component/ServiceCard';
// import ServiceCard from "./components/ServiceCard";
import { services } from "./servicesdata";
import Platforms from './pages/platforms';
import CompanyState from './pages/companystate';
// import ReviewCards from './pages/ReviewCard';
import ReviewCard from './pages/ReviewCard';
import Aboutus from './pages/Aboutus';





const page = () => {
  return (
    <div>
      <Hero1/>
      {/* <Services/> */}
          <section className="p-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <Platforms/>
      <CompanyState/>
      <ReviewCard/>
      <Aboutus/>
    </div>
  )
}

export default page