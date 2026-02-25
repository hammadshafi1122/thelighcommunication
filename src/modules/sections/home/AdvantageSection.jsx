// AdvantagesSection.jsx
import React from "react";
import Image from "../../../assets/images/advantageImage.jpg"; // Replace with your image path

export const AdvantageSection = () => {
  return (
    <section className="bg-[#1a1a1a] border-b-2 text-gold-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Image */}
        <div className="relative md:w-1/2">
          <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500 rounded-lg -z-10"></div>
          <img
            src={Image}
            alt="Advantages"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className=" text-gold-600 text-2xl md:text-3xl font-bold mb-6">
            ADVANTAGES LIGHT COMMUNICATIONS OFFERS
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-200 mb-6">
            <li>End-to-end services and robust platforms to support outsourced services.</li>
            <li>Cut down your operations cost by as much as 50%.</li>
            <li>Access to expert talent pool.</li>
            <li>Scalability and agility to meet your business needs.</li>
            <li>Turn your fixed overhead costs to operational costs.</li>
          </ul>
          <button className="bg-gold-600 text-gold-100 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
};