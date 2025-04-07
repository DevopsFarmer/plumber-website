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
    {/* <div
      onClick={() =>
        handleNavigate(title.replace(/\s+/g, " ").trim().replace(/\s/g, ""))
      }
      className="flex transition-transform cursor-pointer transform hover:scale-105 flex-col items-center justify-center text-black rounded-xl shadow-2xl bg-[#D46A34] p-6 text-center w-52 h-80"
    >
      <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-xl font-bold uppercase">{title}</p>
      <p className="mt-3 text-sm font-medium line-clamp-3 ">{text}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Read More
      </button>
    </div> */}


    <div
  onClick={() =>
    handleNavigate(title.replace(/\s+/g, " ").trim().replace(/\s/g, ""))
  }
  className="flex transition-transform cursor-pointer transform hover:scale-105 flex-col items-center justify-center text-black rounded-xl shadow-2xl bg-[#D46A34] p-6 text-center w-52 h-80"
>
<div className="w-24 h-24 mb-4 flex items-center justify-center overflow-hidden ">
  <Image
    src={imageSrc}
    alt={title}
    width={96}
    height={96}
    className="w-full h-full object-cover"
  />
</div>


  <h3 className="text-lg font-semibold text-gray-900  uppercase tracking-wide">
    {title}
  </h3>
  <p className="mt-2 text-sm text-gray-700  line-clamp-3">
    {text}
  </p>

  <button
    className=" text-sm  border mt-4  font-bold py-2 px-4 border-blue-700 rounded text-blue-600 hover:text-blue-800 transition-colors duration-200"
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
