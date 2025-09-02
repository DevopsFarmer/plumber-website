"use client";
import React, { useState } from "react";
import { GalleryImg } from "./galleryData";
const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        {/* <div className="relative w-full min-h-[500px] pt-30 md:px-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/image8.png"
              className="w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-black/0 dark:bg-black/40"></div>
          </div>
        </div> */}

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
            <div key={index} className="group cursor-pointer relative">
              <img
                src={item}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setSelectedImage(item)}
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
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold shadow hover:bg-gray-200"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
