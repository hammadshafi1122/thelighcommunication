import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import OfficeVideo from '../../../assets/videos/office.mp4'
function HeroSection() {
  return (
     <section className="relative h-screen w-full border-b-2">

      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
<source src={OfficeVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Content */}
      <div className="relative z-10  h-full grid  items-center  delay-300
                animate-[slide_2s_ease-out_forwards]">
        <div className="max-w-7xl mx-6 px-6 md:mx-16  text-white ">

          {/* Small Top Text */}
          <p className="text-gold-500 font-semibold tracking-widest mb-4">
            LET THERE BE LIGHT
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            EFFECTIVELY{" "}
            <span className="text-gold-500">OUTSOURCE</span>
            <br />
            YOUR BUSINESS ...
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-gray-300">
            In our customer-centric BPO approach, we elevate service while
            maximizing lead generation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-gold-500 hover:bg-gold-800 text-gold-100 font-semibold px-8 py-3 rounded-full transition duration-300">
              Apply Now
            </button>

            <button className="border-2 border-gold-600 text-gold-100 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-full transition duration-300">
              Services
            </button>
          </div>

        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-2xl hover:scale-110 transition duration-300">
        <FaWhatsapp />
      </div>

    </section>
  )
}

export default HeroSection
