"use client"
import React from "react";

interface HeroSectionProps {
  title: string;
  description: string[];
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-start bg-white">
      <img
        src={imageUrl}
        alt="Plumber Service"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 w-[400px] p-6 bg-brown-500 bg-opacity-50 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <ul className="mt-4 text-gray-700 list-disc pl-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button 
        onClick={() => window.location.href = "tel:+6378291287"}
        className="mt-6 px-6 py-2 bg-[#3E180E] text-white rounded-md hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
