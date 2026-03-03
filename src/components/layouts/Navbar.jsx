import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#f1b434" : "white",
    display: "block",
    padding: "15px 0",
    fontWeight: "bold",
    textTransform: "uppercase"
  });

  return (
    <div className="absolute top-0 left-0 w-full z-40 px-4 md:px-8 ">
      <div className="  grid grid-cols-3 items-center justify-between w-full">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-20 w-48 md:h-28 md:w-64 object-cover" />

        {/* Desktop Nav */}
        <nav className="hidden  md:flex items-center gap-4 lg:gap-12 text-white font-semibold text-sm lg:text-base ">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-gold-500" : "text-white hover:text-gold-400 transition"}>Home</NavLink>
          <NavLink to="/outbound" className={({ isActive }) => isActive ? "text-gold-500" : "text-white hover:text-gold-400 transition"}>Outbound</NavLink>
          
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-gold-500" : "text-white hover:text-gold-400 transition"}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-gold-500" : "text-white hover:text-gold-400 transition"}>Contact Us</NavLink>
        </nav>

        {/* Right side: Join Us + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="bg-gold-700 px-4 py-2 text-gold-100 text-sm font-semibold rounded hidden sm:block lg:ml-64 ">
            Join Us
          </button>
          <div className="md:hidden text-2xl cursor-pointer text-white ml-44">
            <FaBars onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className={`fixed top-0 left-0 w-full bg-[#111111] z-50 transition-all duration-500 ease-in-out overflow-hidden rounded-b-[30px] shadow-2xl ${
        isOpen ? "h-[85vh] opacity-100" : "h-0 opacity-0"
      }`}>

        {/* Close Button */}
        <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

        <div className="flex flex-col h-full">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-24 w-56 object-cover mt-2 mx-4" />

          {/* Links */}
          <nav className="flex flex-col gap-1 px-10 mt-4">
            <NavLink style={linkStyle} to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink style={linkStyle} to="/outbound" onClick={() => setIsOpen(false)}>Outbound</NavLink>
            <NavLink style={linkStyle} to="/inbound" onClick={() => setIsOpen(false)}>Inbound</NavLink>
            <NavLink style={linkStyle} to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink style={linkStyle} to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          </nav>

          {/* Join Us at bottom of mobile menu */}
          <div className="px-10 mt-6">
            <button className="bg-gold-700 px-6 py-3 text-gold-100 font-semibold rounded w-full sm:w-auto">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;