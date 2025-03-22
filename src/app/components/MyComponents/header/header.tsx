"use client";
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/700.css"; // If you need bold text

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  return (
    <header className="bg-[#FCF8E8] shadow-md">
      <div className="flex justify-between items-center p-4 md:p-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/aboutImg/image 195.png"
            alt="Company Logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
         <h2
  style={{ fontFamily: "Nunito, sans-serif" }}
  className="text-[#3E180E] font-bold text-md md:text-sm"
>
  Central Territory <br /> Plumbing Pty Ltd
</h2>


        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3E180E] text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="about" className="text-[#3E180E] font-bold">
            ABOUT
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[#3E180E] font-bold focus:outline-none"
            >
              SERVICES ▼
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48 z-10">
                <a
                  href="repairs"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                  Tap Repairs
                </a>
                <a
                  href="installations"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                 Drainage Pipes
                </a>
                <a
                  href="maintenance"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                  Water Tanks
                </a>
                <a
                  href="repairs"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                 Hot Water Systems
                </a>
                <a
                  href="installations"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                Gas Fitting
                </a>
                <a
                  href="maintenance"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                >
                 Septic Tanks
                </a>
              </div>
            )}
          </div>

          <a
            href="contact"
            className="bg-[#3E180E] text-white font-bold px-4 py-2 rounded-md bg-gradient-to-r from-[#76200F] to-[#A53C27]"
          >
            CONTACT US
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#FCF8E8] p-4 space-y-4 shadow-md">
          <a
            href="about"
            className="text-[#3E180E] font-bold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[#3E180E] font-bold text-lg"
            >
              SERVICES ▼
            </button>
            {isServicesOpen && (
              <div className="mt-2 bg-white shadow-md rounded-md w-48">
                <a
                  href="repairs"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Repairs
                </a>
                <a
                  href="installations"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Installations
                </a>
                <a
                  href="maintenance"
                  className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Maintenance
                </a>
              </div>
            )}
          </div>
          <a
            href="contact"
            className="bg-[#3E180E] text-white font-bold px-4 py-2 rounded-md bg-gradient-to-r from-[#76200F] to-[#A53C27]"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
