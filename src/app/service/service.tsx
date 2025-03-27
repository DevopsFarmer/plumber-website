"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getServiceData } from "./learningSection.server";
import Image from "next/image";
import Link from "next/link";
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
          <h2 className="text-2xl md:text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap">
            {selectedService.label.replace(/-/g, " ")}
          </h2>
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
        </div>
      </section>

      <div className="relative bg-white flex flex-wrap items-center justify-center p-8">
  <div className="relative w-full max-w-3xl">
    <Image
      src={selectedService.img}
      alt="Leakage Detection"
      width={1000}
      height={800}
      className="rounded-lg shadow-lg w-full object-cover"
    />

    <div className="flex justify-center mt-6 md:mt-0">
      <div className="bg-white rounded-lg p-6 w-full sm:max-w-[400px] border-2 shadow-2xl 
                      mx-auto md:mx-0 md:absolute md:top-4/7 md:right-[-90px] md:transform -translate-y-1/7 md:-translate-y-1/2">
        <div className="flex justify-center mb-4">
          <Image
            src={selectedService.icons}
            alt="Leakage Detection Logo"
            width={80}
            height={80}
            className="w-20 h-20"
          />
        </div>

        <h2 className="text-center text-lg md:text-xl font-semibold text-[#3E180E]">
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
        <Link href="tel:+918824760689">
          <button
            type="submit"
            className="w-full bg-[#D46A34] text-white py-3 rounded text-lg font-bold hover:bg-[#b85527] transition"
          >
            Call Us
          </button>
        </Link>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>

  );
};

export default Service;
