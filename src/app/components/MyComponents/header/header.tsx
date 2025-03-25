"use client";
import "@fontsource/nunito"; 
import "@fontsource/nunito/700.css"; 
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import { motion, AnimatePresence } from "framer-motion";
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-[#FCF8E8] shadow-lg  shadow-black-500/50 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between   pl-4 md:pl-6">
        {/* Logo Section */}
        <Link href="/" rel="noopener noreferrer">
          <div className="flex items-center space-x-3">
            <img
              src="HeaderImg/image 197.png"
              alt="Company Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <h2 className="text-[#3E180E] font-bold text-md md:text-sm">
              Central Territory <br /> Plumbing Pty Ltd
            </h2>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3E180E] text-2xl pr-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center text-center text-xl gap-24 py-0">
          
          <a href="about" className="text-[#3E180E] font py-4">
            ABOUT
          </a>

          {/* Services Dropdown */}
          <div className="relative">
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className="text-[#3E180E]  text-lg py-4"
      >
        SERVICES ▼
      </button>

      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48 z-10"
          >
            {[
              { href: "repairs", label: "Tap Repairs" },
              { href: "installations", label: "Drainage Pipes" },
              { href: "maintenance", label: "Water Tanks" },
              { href: "repairs", label: "Hot Water Systems" },
              { href: "installations", label: "Gas Fitting" },
              { href: "maintenance", label: "Septic Tanks" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                onClick={() => setIsServicesOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

          <a
            href="contact"
            className="bg-[#3E180E] text-white font-extralight px-6 py-9  bg-gradient-to-r from-[#76200F] to-[#A53C27]"
            >
            CONTACT US
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex justify-between items-center  w-full max-w-7xl mx-auto flex-col bg-[#FCF8E8]  space-y-4 shadow-md">
          <a
            href="about"
            className="text-[#3E180E] font-bold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>
          <div className="relative text-center">
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className="text-[#3E180E] font-bold text-lg py-3 w-full md:w-auto"
      >
        SERVICES ▼
      </button>

      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md rounded-md w-48 z-10 md:left-0 md:translate-x-0"
          >
            {[
              { href: "repairs", label: "Repairs" },
              { href: "installations", label: "Installations" },
              { href: "maintenance", label: "Maintenance" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-[#3E180E] hover:bg-gray-200"
                onClick={() => setIsServicesOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
          <a
            href="contact"
            className="bg-[#3E180E] text-white  items-center text-center font-bold px-4 w-full  bg-gradient-to-r from-[#76200F] to-[#A53C27] py-4"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
