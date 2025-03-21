"use client"
import React from "react";
import Link from "next/link";
interface HeroSectionProps {
  title: string;
  description: string[];
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <section className="relative w-full h-[680px] flex items-center justify-start bg-white">
  {/* Background Image */}
  <img
    src={imageUrl}
    alt="Plumber Service"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />

  {/* Plumber Call Container with Transparent Brown Background */}
  <div className="relative z-10 w-[500px] p-6 rounded-2xl shadow-lg bg-[#3F170F9E] backdrop-blur-md">
    <h1 className="text-4xl mt-10 font-bold text-white">{title}</h1>
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

  );
};

export default HeroSection;
