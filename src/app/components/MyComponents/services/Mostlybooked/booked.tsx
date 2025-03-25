import React from "react";
import ServiceCard from "./BookingCard";

const services = [
  { id: 1, title: "Gas Fitting", price: 15, imageSrc: "/service/image.png" },
  { id: 2, title: "Tap Repair", price: 32, imageSrc: "/service/image7.png" },
  { id: 3, title: "Drainage", price: 12, imageSrc: "/service/image4.png" },
];

const ServicesList: React.FC = () => {
  return (
    <section className="p-6 bg-[#FFFFFF] flex flex-col">
       <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
        <h2 className="text-3xl font-bold text-[#3E180E] whitespace-nowrap">
        Mostly Booked
        </h2>
        <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
      </div>

     
      <section className="p-6 bg-white flex flex-col items-center">
    
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center w-full max-w-screen-lg">
        {services.map((service) => (
          <ServiceCard key={service.id} title={service.title} price={service.price} imageSrc={service.imageSrc} />
        ))}
      </div>
    </section>
    </section>
  );
};

export default ServicesList;
