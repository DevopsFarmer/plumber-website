"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };

  const footerSections = [
    {
      title: "Site Links",
      links: [{ name: "Home" }, { name: "About" }],
    },
    {
      title: "Services",
      links: [
        { name: "Hot Water System" },
        { name: "Leakage Detection" },
        { name: "Commercial Plumbing" },
        { name: "Industrial Plumbing" },
        { name: "Residential Plumbing" },
        { name: "Any Other Requests" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { name: "Call Us on 0418 333 952", url: "tel:0418333952" },
        {
          name: "78 Standley Crescent, Gillen, Alice Springs",
          url: "https://goo.gl/maps/RR5P2VRPbEoRjzB59",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#FCF8E8] py-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-center gap-6">

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="mb-6  md:mb-0">
            <a href="/" className="flex items-center justify-center ">
              <img src="/aboutImg/image 195.png" className="h-40 sm:h-60" alt="Logo" />
            </a>
          </div>
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-500 font-medium space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {section.title === "Services" ? (
                        <div 
                          onClick={() => handleNavigate(link.name)}
                          className="hover:underline cursor-pointer"
                        >
                          {link.name}
                        </div>
                      ) : (
                        <a 
                          href= "#"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                  {/* Contact Section - Google Map */}
                  {section.title === "Contact Us" && (
                    <div className="mt-4 flex justify-center sm:justify-start">
                      <iframe
                        className="w-full max-w-[320px] h-[150px] sm:h-[180px] rounded-lg shadow-md"
                        src="https://maps.google.com/maps?q=78+Standley+Crescent,+Gillen,+Alice+Springs&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  )}

              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-200" />
        <div className="text-center sm:text-right">
          <span className="text-sm text-gray-500">Copyright &copy; 2025</span>
        </div>
      </div>
    </footer>
  );
}
