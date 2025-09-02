"use client";
import React, { useState } from "react";
import { GalleryImg } from "./galleryData";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + GalleryImg.length) % GalleryImg.length
    );
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % GalleryImg.length);
  };

  return (
    <>
      <div className="bg-white">
        {/* Title */}
        <section className="container pt-30 md:px-20 bg-white mx-auto text-center p-8">
          <div className="flex items-center w-full gap-4">
            <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
            <h2 className="text-2xl md:text-6xl font-bold text-black text-center whitespace-nowrap">
              Gallery
            </h2>
            <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          </div>
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:mx-20">
          {GalleryImg.map((item: string, index: number) => (
            <div
              key={index}
              className="group cursor-pointer relative w-full h-48"
            >
              <Image
                src={item}
                alt={`Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded-lg transition-transform transform group-hover:scale-105"
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

      {/* Modal */}
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
              <Image
                src={GalleryImg[selectedImageIndex]}
                alt={`Selected Image ${selectedImageIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain rounded-lg shadow-lg pointer-events-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
