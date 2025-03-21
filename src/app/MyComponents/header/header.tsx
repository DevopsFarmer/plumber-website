"use client";
import { useState } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[#FCF8E8] dark:bg-gray-900 flex justify-between items-center p-6">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/aboutImg/image 195.png"
          alt="Company Logo"
          className="w-24 h-24 object-contain"
        />
        <h2 className="text-brown-700 dark:text-white font-bold text-lg">
          Central Territory Plumbing Pty Ltd
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex  gap-6">
        <a href="home" className="text-brown-700 dark:text-black">HOME</a>
        <a href="about" className="text-brown-700 dark:text-white">ABOUT</a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="text-brown-700 dark:text-white focus:outline-none"
          >
            SERVICES ▼
          </button>
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-md rounded-md w-48">
              <a href="repairs" className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Repairs</a>
              <a href="installations" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Installations</a>
              <a href="maintenance" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Maintenance</a>
            </div>
          )}
        </div>

        <a href="contact" className="text-brown-700 dark:text-white">CONTACT</a>
      </nav>
    </header>
  );
}
