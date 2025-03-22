import React from "react";

interface ServiceCardProps {
  title: string;
  price: number;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="w-full max-w-[260px] md:max-w-[400px] bg-white shadow-md rounded-xl p-4 flex items-center gap-4 transition-transform transform hover:scale-105">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">Starting from</p>
        <p className="text-green-600 font-semibold text-lg">${price}</p>
      </div>

      <button className="bg-[#69311F] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#502516] transition">
        Add
      </button>
    </div>
  );
};

export default ServiceCard;
