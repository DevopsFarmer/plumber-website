"use client";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  title: string;
  buttonText: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="relative ">
      <section className="relative  w-full h-[600px] sm:h-[700px] md:h-[750px] flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Plumber Service"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute  inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center ">
          <div className="w-full   bg-[#3F170F6B] bg-opacity-90 backdrop-blur-md shadow-2xl p-6 sm:p-8  ">
            <div className="flex md:px-20 flex-col md:flex-row items-center justify-between text-center md:text-left">
              <h1 className="text-white md:ml-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)]">
                Plumber Service in <br /> Alice Springs
              </h1>

              <Link href="tel:+918824760689">
                <div className="mt-4 drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] md:mt-0 md:mr-10 px-6 py-3 bg-[#D46A34] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#BB5A2B] transition">
                  {buttonText}
                </div>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <img
                  className="w-12 md:w-30  sm:w-10"
                  src="/image 193.png"
                  alt="High Quality Workmanship"
                />
                <p className="text-base sm:text-lg drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] font-semibold text-white text-center mt-2">
                  High Quality Workmanship
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-12 md:w-30 sm:w-10"
                  src="/image 194.png"
                  alt="Target Oriented Expertness"
                />
                <p className="text-base sm:text-lg drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] font-semibold text-white text-center mt-2">
                  Target Oriented Expertness
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-12 md:w-30 sm:w-10 pt-3 md:pt-8"
                  src="/Skills Logo.png"
                  alt="Professional & Experienced Team"
                />
                <p className="text-base sm:text-lg drop-shadow-[3px_3px_4px_rgba(0,0,0,0.8)] font-semibold text-white text-center mt-2">
                  Professional & Experienced Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
