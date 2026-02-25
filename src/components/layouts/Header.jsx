import React from 'react'
import Logo from "../../assets/images/Logo.png"
import Navbar from './Navbar'
export const Header = () => {
  return (
     <header className="bg-[#1a1a1a]  text-gold-500 w-full font-Cinzel border-b-2 border-b-{rgba(200,149,58,0.15)}">
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
