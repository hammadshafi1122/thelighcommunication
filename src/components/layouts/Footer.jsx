import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-[#2b2624] text-white px-6 py-10 relative">
      
      <div className="max-w-7xl mx-auto border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold">
            L
          </div>
          <div>
            <h1 className="text-sm font-bold">LIGHT</h1>
            <p className="text-xs tracking-widest">COMMUNICATIONS</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6 text-gray-300">
          <a href="/home" className="hover:text-yellow-400">Home</a>
          <a href="/outbound" className="hover:text-yellow-400">Outbound</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300">
          <div className="border p-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
            <FaLinkedinIn />
          </div>
          <div className="border p-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
            <FaFacebookF />
          </div>
          <div className="border p-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-xl hover:scale-110 transition">
        <FaWhatsapp />
      </div>

    </footer>
  )
}

export default Footer