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
            Central Territory Plumbing Pty Ltd
          </h2>
          <p className="text-[#3E180E] text-sm">
            Plumbing solutions in the Territory
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex  gap-6">
        <a href="home" className="text-black font-bold">HOME</a>
        <a href="about" className="text-black font-bold">ABOUT</a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="text-black focus:outline-none font-bold"
          >
            SERVICES ▼
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48 font-bold">
              <a href="repairs" className="block px-4 py-2 text-black hover:bg-gray-200 dark:hover:bg-gray-700">Repairs</a>
              <a href="installations" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">Installations</a>
              <a href="maintenance" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">Maintenance</a>
            </div>
          )}
        </div>

        <a href="contact" className="text-black font-bold">CONTACT US</a>
      </nav>
    </header>
  );
}