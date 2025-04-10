import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface ServiceCardProps {
  title: string;
  imageSrc: string;
  text: string;
}

export default function ServiceCard({
  title,
  imageSrc,
  text,
}: ServiceCardProps) {
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };
  return (

    <>

<div
  onClick={() =>
    handleNavigate(title.replace(/\s+/g, " ").trim().replace(/\s/g, ""))
  }
  className="flex transition-transform cursor-pointer hover:scale-105 flex-col items-center justify-between rounded-xl shadow-xl bg-[#642617] bg-gradient-to-b from-[#fa856d] to-[#db5337a8] p-4 sm:p-5 md:p-6 text-center w-full max-w-xs min-h-[22rem] h-auto"
>
  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center overflow-hidden ">
    <Image
      src={imageSrc}
      alt={title}
      width={96}
      height={96}
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-sm sm:text-md md:text-lg font-semibold text-black uppercase tracking-wide">
    {title}
  </h3>

  <p className="mt-2 text-xs sm:text-sm text-black line-clamp-3 px-2">
    {text}
  </p>

  <button
    className="text-xs sm:text-sm border mt-4 font-semibold py-1 sm:py-2 px-3 sm:px-4 border-black rounded text-black hover:text-gray-700 hover:border-gray-700 transition-colors duration-200"
    onClick={(e) => {
      e.stopPropagation();
    }}
  >
    Read More →
  </button>
</div>



    </>
  );
}