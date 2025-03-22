import React from "react";
import ServiceCard from "./BookingCard";

const services = [
  { id: 1, title: "Tap Repair", price: 15, imageSrc: "/serviceImg/service/image-1.png" },
  { id: 2, title: "Flush Tank Repair", price: 32, imageSrc: "/serviceImg/service/image-2.png" },
  { id: 3, title: "Drainage Pipes", price: 12, imageSrc: "/serviceImg/service/image-3.png" },
];

const ServicesList: React.FC = () => {
  return (
    <section className="p-6 bg-white">
      <h2 
        style={{ fontFamily: "Nunito, sans-serif" }}
      className="text-3xl font-bold mb-6 text-[#3E180E]">Mostly Booked</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} title={service.title} price={service.price} imageSrc={service.imageSrc} />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
