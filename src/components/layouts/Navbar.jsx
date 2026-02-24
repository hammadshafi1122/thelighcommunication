import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <>
      {/* Desktop Menu */}
        <nav className='hidden md:flex gap-10 font-semibold' >
      <Link style={{ color: "white", marginRight: "15px" }} to="/">Home</Link>
      <Link style={{ color: "white", marginRight: "15px" }} to="/outbound">Outbound</Link>
      <Link style={{ color: "white" }} to="/inbound">Inbound</Link>
      <Link style={{ color: "white" }} to="/about">AboutUs</Link>
      <Link style={{ color: "white" }} to="/contact">ContactUs</Link>
    </nav>
      {/* Mobile Hamburger */}
      <div className="md:hidden text-2xl cursor-pointer">
        {isOpen ? (
          <FaTimes onClick={() => setIsOpen(false)} />
        ) : (
          <FaBars onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <nav className='hidden md:flex gap-10 font-semibold' >
      <Link style={{ color: "white", marginRight: "15px" }} to="/">Home</Link>
      <Link style={{ color: "white", marginRight: "15px" }} to="/outbound">Outbound</Link>
      <Link style={{ color: "white" }} to="/inbound">Inbound</Link>
      <Link style={{ color: "white" }} to="/about">AboutUs</Link>
      <Link style={{ color: "white" }} to="/contact">ContactUs</Link>
    </nav>
      )}
    </>
  
  )
}

export default Navbar

