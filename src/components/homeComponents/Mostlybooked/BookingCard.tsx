import React from "react";

interface ServiceCardProps {
  title: string;
  price: number;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="w-full max-w-[260px] p-10 md:max-w-[400px] border border-[#EDEDED] bg-[#D46A34] shadow-xl rounded-xl  flex items-center gap-4 transition-transform transform hover:scale-105">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      
      <div className="flex flex-col  flex-grow">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-sm text-black">Starting from</p>
        <p className="text-black font-semibold text-lg">${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;



