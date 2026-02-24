import React from 'react'
import Navbar from './Navbar'
export const Header = () => {
  return (
     <header className="bg-[#121212] text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold">
            L
          </div>
          <div>
            <h1 className="text-sm font-bold leading-none">LIGHT</h1>
            <p className="text-[10px] tracking-widest">COMMUNICATIONS</p>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  )
}
