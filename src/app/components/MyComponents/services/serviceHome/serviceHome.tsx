import React from "react";

interface HeroSectionProps {
  title: string;
  description: string[];
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-start bg-gray-100">
      <img
        src={imageUrl}
        alt="Plumber Service"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 w-[400px] p-6 bg-lime-300 bg-opacity-60 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900">{title}</h1>
        <ul className="mt-4 text-gray-700 list-disc pl-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
