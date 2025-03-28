"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="relative ">
      <section className="relative w-full h-[600px] sm:h-[700px] md:h-[750px] flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Plumber Service"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center ">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#3F170F6B] bg-opacity-90 backdrop-blur-md shadow-2xl p-6 sm:p-8"
          >
            <div className="flex md:px-20 flex-col md:flex-row items-center justify-between text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white md:ml-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)]"
              >
                Plumber Service in <br /> Alice Springs
              </motion.h1>

              <Link href="tel:+918824760689">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] md:mt-0 md:mr-10 px-6 py-3 bg-[#D46A34] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#BB5A2B] transition"
                >
                  {buttonText}
                </motion.div>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mt-6 grid grid-cols-3 gap-6"
            >
              {["/image 193.png", "/image 194.png", "/Skills Logo.png"].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-12 md:w-30 sm:w-10"
                    src={src}
                    alt="Feature Icon"
                  />
                  <p className="text-base sm:text-lg drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] font-semibold text-white text-center mt-2">
                    {index === 0 ? "High Quality Workmanship" : index === 1 ? "Target Oriented Expertness" : "Professional & Experienced Team"}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
