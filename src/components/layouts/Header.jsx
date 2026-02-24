import React from 'react'
import Logo from "../../assets/images/Logo.png"
import Navbar from './Navbar'
export const Header = () => {
  return (
     <header className="bg-[#121212] text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        
    <img
      src={Logo}
      alt="Logo"
      className="h-28 w-64 object-cover"
    />
         

        <Navbar />
      </div>
    </header>
  )
}
