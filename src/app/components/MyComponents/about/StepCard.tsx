import React from "react";

interface StepCardProps {
  image: string;
  title: string;
  highlightedText: string;
  description: string;
  reverse?: boolean; // Optional prop to alternate layouts
}

const StepCard: React.FC<StepCardProps> = ({ image, title, highlightedText, description, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 p-6 rounded-lg bg-white`}>
      {/* Image Section */}
      <div className="w-1/2 ">
        <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mx-10">
        <h3 className="text-xl font-semibold">
          {title} <span className="bg-green-400 text-center text-white px-2 py-1 rounded">{highlightedText}</span>
        </h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
