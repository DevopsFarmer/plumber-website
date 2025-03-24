import React from "react";
import ServiceCard from "./BookingCard";

const services = [
  { id: 1, title: "Tap Repair", price: 15, imageSrc: "/serviceImg/service/image-1.png" },
  { id: 2, title: "Flush Tank Repair", price: 32, imageSrc: "/serviceImg/service/image-2.png" },
  { id: 3, title: "Drainage Pipes", price: 12, imageSrc: "/serviceImg/service/image-3.png" },
];

const ServicesList: React.FC = () => {
  return (
    <section className="p-6 bg-white flex flex-col">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-[#3E180E]">
        Mostly Booked
      </h2>

      {/* Services Grid */}
     
      <section className="p-6 bg-white flex flex-col items-center">
      {/* Title */}
    
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center w-full max-w-screen-lg">
        {services.map((service) => (
          <ServiceCard key={service.id} title={service.title} price={service.price} imageSrc={service.imageSrc} />
        ))}
      </div>
    </section>
    </section>
  );
};

export default ServicesList;
