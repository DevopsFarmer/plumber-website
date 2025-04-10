"use client";
import "@fontsource/nunito";
import "@fontsource/nunito/700.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPorfolioOpen, setIsPorfolioOpen] = useState(false);
  const [openSubMenu1, setOpenSubMenu1] = useState<string | null>(null);
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };

  const handleNavigate2 = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/portfolio?portfolio=${encodedText}`);
  };

  const Porfolio = [
    {
      label: "Hot Water System",
      drop: ["Gas", "Electric", "Heat Bank"],
    },
    { label: "Leakage Detection" },
    { label: "Commercial Plumbing" },
    { label: "Industrial Plumbing" },
    { label: "Residential Plumbing" },
    { label: "Remote Area Plumbing" },
    { label: "Bathroom Kitchen" },
    // { label: "Any Other Requests" },
  ];

  const services = [
    { label: "CIVIL" },
    { label: "COMMERCIAL" },
    { label: "DOMESTIC" },
    { label: "LPG AND NATURAL GAS" },
    { label: "DRAINAGE" },
    { label: "SEWER CLEANING" },
    { label: "CAMERA INSPECTION" },
    { label: "MAINTENANCE" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Shrinks when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-[#FCF8E8] shadow-lg  shadow-black-500/50 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between  pl-4 md:pl-6">
        {/* Logo Section */}
        <Link href="/" rel="noopener noreferrer">
          <div className="flex items-center space-x-3">
            <img
              src="HeaderImg/image 197.png"
              alt="Company Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <h2 className="text-black font-bold text-md md:text-sm">
              Central Territory <br /> Plumbing Pty Ltd
            </h2>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl pr-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center text-center text-xl gap-24 py-0">
        <Link
            href="/"
            className="relative text-black py-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3E180E] after:transition-all after:duration-300 hover:after:w-full"
          >
            HOME
          </Link>
          <div className="relative">
           
            <div
              className="flex text-black text-lg py-4 cursor-pointer"
              onMouseEnter={() => setIsPorfolioOpen(true)}
              onMouseLeave={() => setIsPorfolioOpen(false)}
            >
              PORTFOLIO
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isPorfolioOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Porfolio Dropdown */}
            <AnimatePresence>
              {isPorfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-56 bg-[#F9F7E9] shadow-xl text-left z-10"
                  onMouseEnter={() => setIsPorfolioOpen(true)}
                  onMouseLeave={() => setIsPorfolioOpen(false)}
                >
                  {Porfolio.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        item.drop && setOpenSubMenu1(item.label)
                      }
                      onMouseLeave={() => item.drop && setOpenSubMenu1(null)}
                    >
                      {/* Parent Service */}
                      <div
                        className="block px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer justify-between items-center"
                        onClick={() =>
                          !item.drop &&
                          handleNavigate2(
                            item.label
                              .replace(/\s+/g, " ")
                              .trim()
                              .replace(/\s/g, "")
                          )
                        }
                      >
                        <div className="flex items-center justify-between w-full">
                          {item.label} {item.drop && <ChevronRight size={16} />}
                        </div>
                      </div>
                      {/* Nested Dropdown for Hot Water System */}
                      {item.drop && openSubMenu1 === item.label && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute left-full top-0 w-40 bg-[#F9F7E9] shadow-md z-20"
                        >
                          {item.drop.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                              onClick={() =>
                                handleNavigate2(
                                  subItem
                                    .replace(/\s+/g, " ")
                                    .trim()
                                    .replace(/\s/g, "")
                                )
                              }
                            >
                              {subItem}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="about"
            className="relative text-black py-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3E180E] after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            {/* Main SERVICES Button */}
            <div
              className="flex text-black text-lg py-4 cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              SERVICES
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Services Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-56 bg-[#F9F7E9] shadow-xl text-left z-10"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        setOpenSubMenu(item.label)
                      }
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      {/* Parent Service */}
                      <div
                        className="block px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer justify-between items-center"
                        onClick={() =>
                        
                          handleNavigate(
                            item.label
                              .replace(/\s+/g, " ")
                              .trim()
                              .replace(/\s/g, "")
                          )
                        }
                      >
                        <div className="flex items-center justify-between w-full">
                          {item.label} 
                        </div>
                      </div>
                      {/* Nested Dropdown for Hot Water System */}
                      {/* {item.drop && openSubMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute left-full top-0 w-40 bg-[#F9F7E9] shadow-md z-20"
                        >
                          {item.drop.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                              onClick={() =>
                                handleNavigate(
                                  subItem
                                    .replace(/\s+/g, " ")
                                    .trim()
                                    .replace(/\s/g, "")
                                )
                              }
                            >
                              {subItem}
                            </div>
                          ))}
                        </motion.div>
                      )} */}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="contact"
            className="bg-[#3E180E] text-white font-extralight px-6 py-9  bg-gradient-to-r from-[#76200F] to-[#A53C27]"
          >
            CONTACT US
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full bg-[#FCF8E8] flex flex-col items-center space-y-4 shadow-md">
          <Link
            href="/"
            className="text-black font-bold text-lg py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
      

          <div className="relative w-full text-center">
            <button
              onClick={() => setIsPorfolioOpen(!isPorfolioOpen)}
              className="text-black font-bold text-lg py-3 w-full"
            >
              PORTFOLIO {isPorfolioOpen ? "▲" : "▼"}
            </button>

            <AnimatePresence>
              {isPorfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-[#FCF8E8]  shadow-md rounded-md w-full px-4 py-2 space-y-2"
                >
                  {Porfolio.map((item, index) => (
                    <div key={index} className="text-left">
                      {/* Parent Service */}
                      <div
                        className="flex justify-center text-center items-center  px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                        onClick={() => {
                          
                          handleNavigate2(
                              item.label.replace(/\s+/g, "").trim()
                            );
                            setIsMenuOpen(false);
                          
                        }}
                      >
                        {item.label}
                      
                      </div>

                    
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>



          <Link
            href="about"
            className="text-black font-bold text-lg py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>

          {/* Services Dropdown (Mobile) */}
          <div className="relative w-full text-center">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-black font-bold text-lg py-3 w-full"
            >
              SERVICES {isServicesOpen ? "▲" : "▼"}
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-[#FCF8E8]  shadow-md rounded-md w-full px-4 py-2 space-y-2"
                >
                  {services.map((item, index) => (
                    <div key={index} className="text-left">
                      {/* Parent Service */}
                      <div
                        className="flex justify-center text-center items-center  px-4 py-2 text-black text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                        onClick={() => {
                          
                            handleNavigate(
                              item.label.replace(/\s+/g, "").trim()
                            );
                            setIsMenuOpen(false);
                          
                        }}
                      >
                        {item.label}
                      
                      </div>

                    
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="contact"
            className="bg-[#3E180E] text-white font-bold px-4 py-3 w-full text-center bg-gradient-to-r from-[#76200F] to-[#A53C27]"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
