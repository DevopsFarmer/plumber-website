"use client";
import React from "react";
import { FaAward, FaBullseye, FaUsers } from "react-icons/fa";

interface HeroSectionProps {
  title: string;
  description: string[];
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-start bg-white">
        {/* Background Image */}
        <img
          src={imageUrl}
          alt="Plumber Service"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Text Box */}
        <div className="relative z-10 w-[500px] p-6 rounded-2xl shadow-lg bg-[#3F170F9E] backdrop-blur-md ml-10">
          <h1 
            style={{ fontFamily: "Nunito, sans-serif" }}
          className="text-4xl font-bold text-white">{title}</h1>
          <ul className="mt-4 text-gray-200 list-disc pl-5">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="mt-12 mx-24 px-6 py-2 bg-[#D46A34] text-white text-center rounded-md hover:bg-blue-400 font-semibold">
            {buttonText}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1B2B44] text-white py-8 rounded-t-2xl shadow-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
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
      </section>
    </div>
  );
};

export default HeroSection;
