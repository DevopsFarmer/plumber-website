"use client";
import { useState } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[#FCF8E8] flex justify-between items-center p-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/aboutImg/image 195.png"
          alt="Company Logo"
          className="w-24 h-24 object-contain"
        
        />
        <div>
          <h2 className="text-[#3E180E] font-bold text-lg">
            Central Territory Plumbing
            Pty Ltd
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        <a href="about" className="text-[#3E180E] p-1 font-bold">ABOUT</a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="text-[#3E180E] font-bold focus:outline-none p-1"
          >
            SERVICES ▼
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48">
              <a href="repairs" className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200">Repairs</a>
              <a href="installations" className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200">Installations</a>
              <a href="maintenance" className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200">Maintenance</a>
            </div>
          )}
        </div>

        <a href="contact" className="bg-[#3E180E] p-1 text-white font-bold rounded-md bg-gradient-to-r from-[#76200F] to-[#A53C27] right-0 ">CONTACT US</a>
      </nav>
    </header>
  );
}
