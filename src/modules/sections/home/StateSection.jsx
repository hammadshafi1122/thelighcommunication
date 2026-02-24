import React from "react";

function StatsSection() {
  const stats = [
    { number: "150+", label: "HEADCOUNT" },
    { number: "12+", label: "EXPERIENCE" },
    { number: "9000+", label: "INSURANCE SALES PER MONTH" },
    { number: "25000+", label: "LEADS PER MONTH" },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-4">
      {/* Stats Container */}
      <div className="max-w-7xl mx-auto border border-yellow-400 rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:text-left"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-white">
              {stat.number}
            </span>
            <span className="mt-1 text-sm md:text-base text-gray-300 font-semibold tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-3 border border-white rounded-full text-white font-semibold hover:bg-yellow-400 hover:text-black transition duration-300">
          Contact Our Sales
        </button>
      </div>
    </section>
  );
}

export default StatsSection;