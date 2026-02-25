import React from "react";
import SectionImage from "../../../assets/images/servicesectImage.jpg"; // Replace with your image path
import { FaCheckCircle, FaBolt } from "react-icons/fa";

function ServicesSection() {
  return (
    <section className="bg-[#1a1a1a] border-b-2 text-gold-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            TAILORED <span className="text-gold-600">LIGHTNING-SPEED</span> SOLUTIONS FOR EVERY BUSINESS
          </h2>
          <p className="text-gray-300">
            With a combined leadership experience of 12 years within the industry, our team excels in managing large-scale businesses, cultivating extensive teams, and fostering valuable relationships. At Light Communications, we have emerged as pioneers in the Contact Center sector, specializing in supporting customer interactions across diverse channels such as Web collaboration, Web chat, and the rapidly evolving landscape of social media interactions, setting us apart from the competition.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <p className="flex items-center gap-2"><FaCheckCircle className="text-gold-600"/> LEAD GENERATION</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-gold-600"/> LIFE INSURANCE SALES</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-gold-600"/> INBOUND CUSTOMER SERVICES</p>
            <p className="flex items-center gap-2"><FaCheckCircle className="text-gold-600"/> OUTBOUND CUSTOMER SERVICES</p>
          </div>

          {/* Call-to-Action */}
          <button className="mt-6 bg-gold-600 text-black hover:bg-gold-900 hover:text-gold-100 font-semibold px-8 py-3 rounded-full transition duration-300">
            Get Free Consultation
          </button>
        </div>

        {/* Right Side: Image + Info Box */}
        <div className="lg:w-1/2 relative">
          <img
            src={SectionImage}
            alt="Business working"
            className="rounded-xl shadow-lg w-full object-cover"
          />

          <div className="absolute bottom-4 left-6 bg-gold-600 border-2 border-gold-900 rounded-lg p-4 flex items-start gap-3 max-w-xs">
            <FaBolt className="text-black text-xl mt-1" />
            <p className="text-sm text-white">
              THERE ARE OVER <strong>150+</strong> SEATS PRESENTLY OPERATIONAL ACROSS MULTIPLE LOCATIONS, GENERATING OVER <strong>25,000+</strong> TRANSFERS PER MONTH.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;