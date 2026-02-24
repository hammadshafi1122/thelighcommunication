import React from 'react';

const ContactInfoSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-4 flex flex-col items-center">
      
      {/* Top Rounded Button */}
      <button className="mb-12 px-10 py-3 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors">
        Contact Our Sales
      </button>

      {/* Contact Us Box */}
      <div className="max-w-6xl w-full bg-[#121212] rounded-[30px] p-8 md:p-12 border border-yellow-500/50 flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-black uppercase mb-4 tracking-wider">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Light Communications is dedicated to providing an extensive array of services and back-office support, 
            led by experienced professionals with a specialization in managing industry-related businesses. Our 
            team is committed to delivering exceptional results and exceeding client expectations. Contact us today 
            to discuss how we can support and optimize your business operations.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto min-w-[250px]">
          <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-2xl hover:brightness-110 transition-all">
            Get Started
          </button>
          <button className="w-full py-4 bg-[#2a2a2a] text-white font-bold rounded-2xl border border-gray-700 hover:bg-[#333] transition-all">
            Get A Consultation
          </button>
        </div>
      </div>

      {/* Request More Info Section */}
      <div className="text-center max-w-4xl">
        <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-4">
          Up skill for a better future
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter">
          Request More Information
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm md:text-base">
          multiple services strategically put together to form a unique 
          business process outsourcing organization.
        </p>
        
        {/* Bottom Contact Button */}
        <button className="px-16 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-full text-xl shadow-lg hover:scale-105 transition-transform">
          Contact Us
        </button>
      </div>

    </section>
  );
};

export default ContactInfoSection;