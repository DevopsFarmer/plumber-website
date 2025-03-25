"use client";

import ServiceCard from "./serviceCard";

const services = [
  { title: "GAS FITTINGS", imageSrc: "/service/image.png" },
  { title: "SEPTIC TANKS", imageSrc: "/service/image1.png" },
  { title: "HOT WATER SYSTEM", imageSrc: "/service/image3.png" },
  { title: "DRAINAGE PIPES", imageSrc: "/service/image4.png" },
  { title: "INDUSTRIAL PLUMBING", imageSrc: "/service/image5.png" },
  { title: "BATHROOM & KITCHEN", imageSrc: "/service/image6.png" },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-[#F9F7E9] transition-colors duration-300   ">
     <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
        <h2 className="text-3xl font-bold text-[#3E180E] whitespace-nowrap">
          Services
        </h2>
        <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
      </div>

      <section className="py-12 transition-colors  duration-300 bg-[#F9F7E9] flex flex-col items-center ">
        <div className="container items-center justify-center px-6">
            <div className="grid  items-center justify-center grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 place-items-center">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  imageSrc={service.imageSrc}
                />
              ))}
            </div>
        </div>
      </section>
    </section>
  );
}
