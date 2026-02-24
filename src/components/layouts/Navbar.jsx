import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for active link styling
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#f1b434" : "white",
    display: "block",
    padding: "15px 0",
    fontWeight: "bold",
    textTransform: "uppercase"
  });

  return (
    <>
      {/* --- DESKTOP MENU --- */}
      <nav className='hidden md:flex gap-28 font-semibold mx-20'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/outbound">Outbound</NavLink>
        <NavLink to="/inbound">Inbound</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      {/* --- HAMBURGER ICON (Trigger) --- */}
      <div className="md:hidden text-2xl cursor-pointer text-white p-4">
        <FaBars onClick={() => setIsOpen(true)} />
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <div 
        className={`fixed top-0 left-0 w-full bg-[#111111] z-50 transition-all duration-500 ease-in-out overflow-hidden rounded-b-[30px] shadow-2xl ${
          isOpen ? "h-[85vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button 
          className="absolute top-8 right-8 text-white text-4xl"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col  ">
          {/* Logo Section */}
          <img
      src={Logo}
      alt="Logo"
      className="h-28 w-64 object-cover"
    />

          {/* Links */}
          <nav className="flex flex-col gap-2 p-3 mx-10">
            <NavLink style={linkStyle} to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink style={linkStyle} to="/outbound" onClick={() => setIsOpen(false)}>Outbound</NavLink>
            <NavLink style={linkStyle} to="/inbound" onClick={() => setIsOpen(false)}>Inbound</NavLink>
            <NavLink style={linkStyle} to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink style={linkStyle} to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;