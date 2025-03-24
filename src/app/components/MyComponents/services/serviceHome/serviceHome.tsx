

"use client";
import React from "react";
import { FaAward, FaBullseye, FaUsers } from "react-icons/fa";

interface HeroSectionProps {
  title: string;
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, buttonText, imageUrl }) => {
  return (
    <div className="relative w-full">
    {/* Hero Section */}
    <section className="relative w-full h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Plumber Service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolut inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 py-6">
        {/* Title & Button Container */}
        <div className="flex w-screen mb-16 items-center justify-between bg-[#3F170F6B] bg-opacity-90 backdrop-blur-md shadow-2xl p-6 rounded-lg">
          {/* Left Side - Text */}
          <div className="text-left pl-12 mt-12 mb-12 pd-6 ">
            <h1 className="text-white text-6xl font-bold leading-tight">
           Plumber Service in <br /> Alice Springs
            </h1>
          </div>

          {/* Right Side - Button */}
          <button className="px-6 py-3 mr-12 bg-[#D46A34] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#BB5A2B] transition">
            {buttonText}
          </button>
        </div>
          {/* Feature Section Over Image */}
          <div className="absolute bottom-1 mt-12 w-screen left-1/2 transform -translate-x-1/2 bg-[#0F2E3FB8] bg-opacity-40 backdrop-blur-md text-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2">
                <FaAward className="text-4xl text-white" />
                <p className="text-lg font-semibold">High Quality Workmanship</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2">
                <FaBullseye className="text-4xl text-white" />
                <p className="text-lg font-semibold">Target Oriented Expertness</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2">
                <FaUsers className="text-4xl text-white" />
                <p className="text-lg font-semibold">Professional & Experienced Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
