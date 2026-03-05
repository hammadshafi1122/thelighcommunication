import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#111111]">

      {/* Top gold line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent" />

      {/* Main footer row */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-5 gap-4">

        {/* Logo — left */}
        <span className="font-bold text-white text-2xl">
         CROWNIX 
         <span className="text-gold-600"> BPO</span>
        </span>

        {/* Nav links — center */}
        <nav className="flex items-center gap-6 md:gap-10 text-sm font-semibold tracking-wide flex-wrap justify-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : "text-white hover:text-yellow-400 transition duration-200"}>Home</NavLink>
          <NavLink to="/outbound" className={({ isActive }) => isActive ? "text-yellow-500" : "text-white hover:text-yellow-400 transition duration-200"}>Outbound</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500" : "text-white hover:text-yellow-400 transition duration-200"}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-500" : "text-white hover:text-yellow-400 transition duration-200"}>Contact Us</NavLink>
        </nav>

        {/* Social icons — right */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-yellow-500 hover:text-yellow-500 transition duration-200 text-sm"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-yellow-500 hover:text-yellow-500 transition duration-200 text-sm"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-yellow-500 hover:text-yellow-500 transition duration-200 text-sm"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom gold line + copyright */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent" />
      <div className="text-center py-3 text-xs text-white/30 tracking-wide">
        © {new Date().getFullYear()} Crownix BPO. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
