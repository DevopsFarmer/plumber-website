"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getPortfolioData } from "./learningSection.server";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Portfolio: React.FC = () => {
  const searchParams: any = useSearchParams();
  const portfolio = searchParams.get("portfolio");
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 👈 For modal

const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

const handlePrev = () => {
  if (selectedImageIndex === null) return;
  setSelectedImageIndex(
    (selectedImageIndex - 1 + selectedPortfolio.GalleryImg.length) % selectedPortfolio.GalleryImg.length
  );
};

const handleNext = () => {
  if (selectedImageIndex === null) return;
  setSelectedImageIndex((selectedImageIndex + 1) % selectedPortfolio.GalleryImg.length);
};

  
  useEffect(() => {
    const fetchData = async () => {
      if (portfolio) {
        const portfolioName: any = portfolio;
        const portfolioData: any = await getPortfolioData(portfolioName);
        setSelectedPortfolio(portfolioData);
      }
    };
    fetchData();
  }, [portfolio]);

  if (!selectedPortfolio) {
    return (
      <div className="h-96 max-w-screen-2xl pl-8 mx-auto flex flex-col justify-center border-b border-gray-500 text-white items-center bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient">
        <h1 className="text-2xl md:text-6xl uppercase font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white">
        <div className="relative w-full min-h-[500px] pt-30 md:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={selectedPortfolio.img}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 dark:bg-black/40"></div>
          </div>
          <div className="relative w-full md:w-[600px] lg:w-[700px] p-8 md:p-12 mt-8 md:mt-12 mx-auto md:mr-8 lg:mr-12">
            <div className="bg-white/90 dark:bg-gray-800/90 p-8 rounded-lg backdrop-blur-sm">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
                  {selectedPortfolio.label.replace(/-/g, " ")}
                </h2>

                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6">
                  {selectedPortfolio.herotext}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:+918824760689"
                    className="bg-red-600 dark:bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
                  >
                    Call Us
                  </Link>
                  <a
                    href="#"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex items-center transition-colors"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-12 md:px-16 lg:px-32 bg-white text-gray-900">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-red-500 mb-6">
            {selectedPortfolio.text1}
          </h2>
          <div className="border-b-4 border-red-400 w-20 mx-auto mb-10" />

          <h3 className="text-center text-lg md:text-xl font-bold mb-4">
            {selectedPortfolio.text2}
          </h3>

          <p className="text-center max-w-4xl mx-auto mb-2">
            {selectedPortfolio.text3}
          </p>
          <p className="text-center max-w-4xl mx-auto mb-2">
            {selectedPortfolio.text4}
          </p>
          <p className="text-center max-w-4xl mx-auto mb-10">
            {selectedPortfolio.text5}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                {selectedPortfolio.lefttext1}
              </h3>
              <p className="font-semibold mb-2">
                {selectedPortfolio.lefttext2}
              </p>
              <p className="mb-4">{selectedPortfolio.lefttext3}</p>
              <p>{selectedPortfolio.lefttext4}</p>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                {selectedPortfolio.righttext1}
              </h3>
              <p className="font-semibold mb-2">
                {selectedPortfolio.righttext2}
              </p>
              <p className="mb-2">{selectedPortfolio.righttext3}</p>
              <ul className="list-disc list-inside space-y-1">
                {selectedPortfolio.learnings.map(
                  (item: string, index: number) => (
                    <li key={index}>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <section className="container pt-30 md:px-20 bg-white mx-auto text-center p-8">
          <div className="flex items-center w-full gap-4">
            <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
            <h2 className="text-2xl md:text-6xl font-bold text-black text-center whitespace-nowrap">
              Gallery
            </h2>
            <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:mx-20">
          {selectedPortfolio.GalleryImg.map((item: string, index: number) => (
            <div key={index} className="group cursor-pointer relative">
              <img
                src={item}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setSelectedImageIndex(index)} 
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
       {selectedImageIndex !== null && (
           <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
             <div className="relative max-w-3xl w-full p-4 flex items-center justify-center">
               {/* Prev Button */}
               <button
                 onClick={handlePrev}
                 className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 z-50"
               >
                 <FaChevronLeft />
               </button>
   
               {/* Next Button */}
               <button
                 onClick={handleNext}
                 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 z-50"
               >
                 <FaChevronRight />
               </button>
   
               {/* Close Button */}
               <button
                 onClick={() => setSelectedImageIndex(null)}
                 className="absolute top-2 right-2 z-50 bg-white rounded-full px-3 py-1 text-black font-bold shadow hover:bg-gray-200"
               >
                 ✕
               </button>
   
               <div className="relative w-full h-[80vh]">
                 <img
                   src={selectedPortfolio.GalleryImg[selectedImageIndex]}
                   alt={`Selected Image ${selectedImageIndex + 1}`}
                   className="object-contain rounded-lg w-full h-full shadow-lg pointer-events-none"
                 />
               </div>
             </div>
           </div>
         )}

      <div className="bg-[#f2f9fc] py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Have a project in mind?
        </h2>
        <p className="text-lg text-black mb-6 max-w-2xl mx-auto">
          Contact Satori Plumbing Solutions today to find the best plumbing
          solution for your needs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#00a9f1] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0092d1] transition duration-300"
        >
          CONTACT SATORI
        </a>
      </div>
    </>
  );
};

export default Portfolio;
