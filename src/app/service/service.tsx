"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getServiceData } from "./learningSection.server";
import Image from "next/image";
const Service: React.FC = () => {
  const searchParams:any = useSearchParams();
  const service = searchParams.get("service");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (service) {
        const serviceName:any = service ; 
        const serviceData:any = await getServiceData(serviceName);
        setSelectedService(serviceData);
      }
    };
    fetchData();
  }, [service]);

  if (!selectedService) {
    return (
      <div className="h-96 max-w-screen-2xl pl-8 mx-auto flex flex-col justify-center border-b-[1px] border-gray-500 text-white items-center bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient">
        <h1 className="text-2xl md:text-6xl uppercase font-bold">Loading...</h1>
      </div>
    );
  }

  const toggleDropdown = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null); 
  };

  const toggleSubDropdown = (subIndex: number) => {
    setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex);
  };

  return (
    <div className="bg-white">
      <section className="container pt-30 md:px-20 bg-white mx-auto text-center p-8">
        <div className="flex items-center w-full gap-4">
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          <h2 className="text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap">
            {selectedService.label.replace(/-/g, " ")}
          </h2>
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
        </div>
      </section>

      <div className="relative bg-white flex items-center justify-center p-8">
        <div className="relative w-full max-w-3xl">
          <Image
            src={selectedService.img}
            alt="Leakage Detection"
            width={1000}
            height={800}
            className="rounded-lg shadow-lg"
          />

          <div className="absolute top-4/7 right-[-90px] transform -translate-y-1/2 bg-white rounded-lg p-6 w-[400px] border-2 shadow-2xl">
            <div className="flex justify-center mb-4">
              <Image
                src={selectedService.icons}
                alt="Leakage Detection Logo"
                width={100}
                height={100}
              />
            </div>

            <h2 className="text-center text-xl font-semibold text-[#3E180E]">
              {selectedService.label.replace(/-/g, " ")}
            </h2>

            <form className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
              />

              <button
                type="submit"
                className="w-full bg-[#D46A34] text-white py-3 rounded text-lg font-bold"
              >
                Call Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Service;
