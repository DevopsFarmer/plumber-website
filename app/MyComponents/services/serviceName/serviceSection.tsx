"use client";

import ServiceCard from "./serviceCard";

const services = [
  { title: "BASIN & SINK", imageSrc: "/serviceImg/service/image-3.jpg" },
  { title: "GROUTING", imageSrc: "/serviceImg/service/image-3.png" },
  { title: "BATH FILING", imageSrc: "/serviceImg/service/image-1.png" },
  { title: "DRAINAGE PIPES", imageSrc: "/serviceImg/service/image-2.png" },
  { title: "TOILET", imageSrc: "/serviceImg/service/image-3.png" },
  { title: "TAP & MIXER", imageSrc: "/serviceImg/service/image-4.png" },
  { title: "WATER TANK", imageSrc: "/serviceImg/service/image-5.png" },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} imageSrc={service.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}
