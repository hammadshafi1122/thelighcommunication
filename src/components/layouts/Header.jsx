// import React from 'react'
import Navbar from "./Navbar";
import BackgroundSlider from "../elements/BackgroundSlider";
// export const Header = () => {
//   return (
//      <header className=" text-gold-500 w-full font-Cinzel border-b-2 border-b-{rgba(200,149,58,0.15)}">

//       <div className="max-w-7xl mx-auto flex items-center justify-between ">

//     <img
//       src={Logo}
//       alt="Logo"
//       className="h-28 w-64 object-cover"
//     />

//         <Navbar />
//       </div>
// //     </header>
//   )
// }

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <header className="relative min-h-[100dvh] w-full overflow-hidden ">
      <div className="absolute inset-0 h-full w-full -z-20">
        <BackgroundSlider />
      </div>

      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10 "></div>

      {/* Content */}
      <div
        className=" relative h-full grid md:mt-44 mt-20  md:py-0 py-10 delay-300 flex justify-center align-middle 
                      animate-[slide_2s_ease-out_forwards]"
      >
        <div className="max-w-7xl mx-6 px-6 md:mx-16 text-white ">
          <p className="text-gold-500 font-semibold tracking-widest mb-4 md:mx-80">
            LET THERE BE LIGHT
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            EFFECTIVELY <span className="text-gold-500">OUTSOURCE</span>
            <br />
            <div className="md:ml-32"> YOUR BUSINESS ...</div>
          </h1>

          <p className="mt-6 max-w-xl text-gray-300 md:mx-32">
            In our customer-centric BPO approach, we elevate service while
            maximizing lead <span className="md:ml-60"> generation.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 md:ml-64">
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
    </header>
  );
}

export default Header;
