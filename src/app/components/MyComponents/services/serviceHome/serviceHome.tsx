

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
      <section className="relative w-full h-[750px] flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Plumber Service"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolut inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 py-6">
          <div className="flex  w-screen justify-center  items-center  bg-[#3F170F6B] bg-opacity-90 backdrop-blur-md shadow-2xl p-6 ">
            <div className=" items-center justify-center text-center ">
              <div className="flex items-center justify-between pl-12 pr-12 mt-12 mb-12">
                <h1 className="text-white text-left text-6xl font-bold leading-tight">
                  Plumber Service in <br /> Alice Springs
                </h1>
                <Link href="tel:+918824760689">
                  <div className="px-10 py-3 bg-[#D46A34] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#BB5A2B] transition">
                    {buttonText}
                  </div>
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <img className=" w-30 h-30" src="/image 193.png" />
                  <p className="text-lg font-semibold">
                    High Quality Workmanship
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img className=" w-30 h-30" src="/image 194.png" />
                  <p className="text-lg font-semibold">
                    Target Oriented Expertness
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-30 h-30 p-4" src="/Skills Logo.png" />
                  <p className="text-lg font-semibold">
                    Professional & Experienced Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
