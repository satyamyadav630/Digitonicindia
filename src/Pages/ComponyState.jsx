import React from "react";
import CountUp from "react-countup";
import { Target, Users, Award, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";

const CompanyStats = () => {
  const stats = [
    { icon: <Target size={40} />, value: 2563, label: "Projects Complete" },
    { icon: <Users size={40} />, value: 98.9, label: "Clients Happy", isDecimal: true },
    { icon: <Award size={40} />, value: 35.6, label: "Years Experience", isDecimal: true },
    { icon: <Trophy size={40} />, value: 63000, label: "Award Winning" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,    
  });

  return (
    <div ref={ref} className="bg-purple-600 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-lg font-medium">Company Statistics</p>
          <h2 className="text-4xl font-bold mt-2">
            Learn About Our <br /> Company Statistics
          </h2>
          <a
            href="#"
            className="inline-block mt-5 text-white underline hover:text-gray-200"
          >
            Learn More →
          </a>
        </div>

        {/* RIGHT COUNTERS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.isDecimal ? 1 : 0}
                    suffix={
                      stat.label === "Award Winning"
                        ? "+"
                        : stat.label === "Clients Happy"
                        ? "%"
                        : "+"
                    }
                  />
                )}
              </div>
              <p className="mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
