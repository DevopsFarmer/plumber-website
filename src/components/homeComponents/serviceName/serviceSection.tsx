"use client";

import React, { useState } from "react";


const services = [
  {
    title: "CIVIL",
    description: "For small to large-scale communities and development sites.",
    icon: "/service/image.png", 
  },
  {
    title: "COMMERCIAL",
    description: "Offering everything from project planning to project completion.",
    icon: "/service/image1.png",
  },
  {
    title: "DOMESTIC",
    description: "Installing and maintaining the best gas solution for your property.",
    icon: "/service/image3.png",
  },
  {
    title: "LPG & NATURAL GAS",
    description: "Installing and maintaining your property’s best gas options.",
    icon: "/service/image4.png",
  },
  {
    title: "DRAINAGE",
    description: "Utilising innovative tools and technical expertise to manage water flow issues.",
    icon: "/service/image5.png",
  },
  {
    title: "SEWER CLEANING",
    description: "Ensuring your sewer is clean and blockage-free.",
    icon: "/service/image6.png",
  },
  {
    title: "CAMERA INSPECTION",
    description: "Visibility that surpasses industry standards with innovative tools.",
    icon: "/service/image1.png",
  },
  {
    title: "MAINTENANCE",
    description: "Inspecting, repairing, and servicing your plumbing systems to prevent and fix issues.",
    icon: "/service/image3.png",
  },
];

import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };

  return (
<>
<div className="bg-white py-12 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-[#ff3300] bg-gradient-to-b from-[#f72a01] to-[#f5e6e2a8] duration-300"
           
         >
            <img
              src={service.icon}
              alt={service.title}
              className="mx-auto mb-4 h-16 w-16"
            />
            <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-3">{service.description}</p>
            <a
              href="#"
              className="text-black-500 font-semibold hover:underline transition"
              onClick={() =>
                        
                handleNavigate(
                  service.title
                    .replace(/\s+/g, " ")
                    .trim()
                    .replace(/\s/g, "")
                )
              }
            >
              FIND OUT MORE &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
</>




// const services = [
//   { title: "GAS FITTINGS", imageSrc: "/service/image.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
//   { title: "SEPTIC TANKS", imageSrc: "/service/image1.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
//   { title: "Hot water System", imageSrc: "/service/image3.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
//   { title: "DRAINAGE PIPES", imageSrc: "/service/image4.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
//   { title: "Industrial Plumbing", imageSrc: "/service/image5.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
//   { title: "Bathroom Kitchen", imageSrc: "/service/image6.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam iusto harum, repellendus modi odit tenetur nostrum, similique a laudantium quam, dolorum qui illum error voluptates. Dolorum omnis iste necessitatibus cumque!" },
// ];





  //   <section className="py-12 md:px-20 bg-[#F9F7E9] transition-colors duration-300">
  //   <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
  //     <h2 className="text-3xl font-bold text-black whitespace-nowrap">
  //       Services
  //     </h2>
  //     <div className="bg-[#D46A34] flex-grow h-[0.5px]"></div>
  //   </div>
  
  //   <section className="py-12 transition-colors duration-300 bg-[#F9F7E9] flex flex-col items-center">
  //     <div className="container px-6 flex justify-center">
  //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
  //         {services.map((service, index) => (
  //           <ServiceCard
  //             key={index}
  //             title={service.title}
  //             imageSrc={service.imageSrc}
  //             text= {service.text}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // </section>
  
  );
}