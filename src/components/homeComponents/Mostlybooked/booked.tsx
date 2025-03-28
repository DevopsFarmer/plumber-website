"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./BookingCard";

const services = [
  { id: 1, title: "Gas Fitting", price: 15, imageSrc: "/service/image.png" },
  { id: 2, title: "Tap Repair", price: 32, imageSrc: "/service/image7.png" },
  { id: 3, title: "Drainage", price: 12, imageSrc: "/service/image4.png" },
];

const ServicesList: React.FC = () => {
  // Hook to detect when the section is in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="p-6 md:px-20 bg-[#FFFFFF] flex flex-col">
      {/* Title with Animation */}
      <motion.div
        className="container px-6 flex items-center gap-4 mt-6 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-[#3E180E] whitespace-nowrap">
          Mostly Booked
        </h2>
        <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
      </motion.div>

      {/* Cards Section with Scroll Animation */}
      <section className="p-6 bg-white flex flex-col items-center">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center w-full max-w-screen-lg"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            >
              <ServiceCard
                title={service.title}
                price={service.price}
                imageSrc={service.imageSrc}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ServicesList;
