import React from 'react';
import { Headset, Monitor, Calculator } from 'lucide-react';


const Services = () => {
  // const services = [
  //   {
  //     title: "Inbound Customer Service",
  //     description: "Handling incoming calls from customers who need assistance with a product or service.",
  //     icon: null, // Top-left card doesn't have an internal icon in the reference
  //     bgColor: "bg-[#1a1a1a]",
  //   },
  //   {
  //     title: "Outbound Sales Calls",
  //     description: "Light communications: Quick technical solutions for smooth operations and enhanced customer satisfaction.",
  //     icon: null,
  //     bgColor: "bg-[#1a1a1a]",
  //   },
  //   {
  //     title: "Technical Support",
  //     description: "Streamlined Medical Billing Services for efficient claims processing, compliance management, and optimized revenue cycles.",
  //     icon: null,
  //     bgColor: "bg-[#1a1a1a]",
  //   }
  // ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-4 min-h-screen flex flex-col items-center justify-center font-sans text-white">
      {/* Section Header */}
      <div className="relative mb-16 flex flex-col items-center">
        <div className="w-16 h-16 bg-gold-600 rounded-full mb-[-20px] z-0"></div>
        <h2 className="text-4xl font-black text-gold-200 tracking-tighter uppercase relative z-10 italic">
          Our Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Floating Icons based on the image layout */}
        <div className="absolute -top-12 left-[30%] z-20 hidden md:block">
          <div className="bg-gold-600 p-5 rounded-full shadow-xl">
            <Monitor size={48} strokeWidth={1.5} className="text-black" />
          </div>
        </div>

        <div className="absolute -bottom-10 left-[38%] z-20 hidden md:block">
          <div className="bg-gold-600 p-5 rounded-full shadow-xl">
            <Calculator size={48} strokeWidth={1.5} className="text-black" />
          </div>
        </div>

        <div className="absolute -bottom-10 right-4 z-20 hidden md:block">
          <div className="bg-gold-600 p-5 rounded-full shadow-xl">
            <Headset size={48} strokeWidth={1.5} className="text-black" />
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-gray-800 flex flex-col justify-start min-h-[350px]">
          <h3 className="text-2xl font-bold mb-6 leading-tight">Inbound Customer Service</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Handling incoming calls from customers who need assistance with a product or service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-gray-800 flex flex-col justify-start min-h-[350px]">
          <h3 className="text-2xl font-bold mb-6 leading-tight">Outbound Sales Calls</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Light communications: Quick technical solutions for smooth operations and enhanced customer satisfaction.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-gray-800 flex flex-col justify-start min-h-[350px]">
          <h3 className="text-2xl font-bold mb-6 leading-tight">Technical Support</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Streamlined Medical Billing Services for efficient claims processing, compliance management, and optimized revenue cycles.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;