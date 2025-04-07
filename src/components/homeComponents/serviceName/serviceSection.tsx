"use client";

import ServiceCard from "./serviceCard";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const services = [
  { title: "GAS FITTINGS", imageSrc: "/service/image.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
  { title: "SEPTIC TANKS", imageSrc: "/service/image1.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
  { title: "Hot water System", imageSrc: "/service/image3.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
  { title: "DRAINAGE PIPES", imageSrc: "/service/image4.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
  { title: "Industrial Plumbing", imageSrc: "/service/image5.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
  { title: "Bathroom Kitchen", imageSrc: "/service/image6.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
];

export default function ServicesSection() {




  return (
    <section className="py-12 md:px-20 bg-[#F9F7E9] transition-colors duration-300">
    <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
      <h2 className="text-3xl font-bold text-black whitespace-nowrap">
        Services
      </h2>
      <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
    </div>
  
    <section className="py-12 transition-colors duration-300 bg-[#F9F7E9] flex flex-col items-center">
      <div className="container px-6 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              text= {service.text}
            />
          ))}
        </div>
      </div>
    </section>
  </section>
  
  );
}