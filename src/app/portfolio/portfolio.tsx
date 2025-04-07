"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getPortfolioData } from "./learningSection.server";
import Image from "next/image";
import Link from "next/link";
const Portfolio: React.FC = () => {
  const searchParams: any = useSearchParams();
  const portfolio = searchParams.get("portfolio");
  const [selectedPortfolio, setSelectedPortfolio] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

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
      <div className="relative w-full min-h-[500px] pt-30 md:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://broussardservices.com/wp-content/uploads/2022/04/Broussard-plumbing-nashville-TN-1536x1024.jpeg"
           
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                consectetur quasi porro sed ratione illo eligendi ad
                reprehenderit? Alias pariatur tenetur ad consequuntur nisi sunt,
                exercitationem dignissimos dolor facere illo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 dark:bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-700 dark:hover:bg-red-800 transition-colors">
                  Contact US
                </button>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-sky-500 mb-6">
        Satori Plumbing Solutions’ projects exceed industry standards.
      </h2>
      <div className="border-b-4 border-sky-400 w-20 mx-auto mb-10" />

      <h3 className="text-center text-lg md:text-xl font-bold mb-4">
        Satori delivers unparalleled plumbing services that adhere strictly to Australian plumbing standards. <br />
        We hold LPG and natural gas accreditations, backflow prevention, and PWC for water and sewer primary connections.
      </h3>

      <p className="text-center max-w-4xl mx-auto mb-2">
        From project planning to completion, we communicate openly with our clients and other trades for a seamless process.
        We will work with you to find your project’s most durable and long-lasting solutions. Satori owns and operates our machinery,
        which saves time from outsourcing, allowing us to complete projects within projected timeframes.
      </p>
      <p className="text-center max-w-4xl mx-auto mb-2">
        Our team approach for each project is committed to customer satisfaction and delivering high-quality workmanship.
      </p>
      <p className="text-center max-w-4xl mx-auto mb-10">
        We pay special attention to detail throughout our projects and ensure every aspect is completed with safety,
        functionality and compliance in mind.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-bold mb-2">
            Power Water Corporation Water and Sewer Main upgrades.
          </h3>
          <p className="font-semibold mb-2">
            PWC (Power Water Corporation) emergency jobs. Completed under the Murray River North Group.
          </p>
          <p className="mb-4">
            Satori Plumbing Solutions successfully upgraded the PWC systems by replacing old water and sewer lines with modern
            connections to match new housing developments. This project required advanced expertise, including managing road closures
            for trenching and working at significant depths to install new sewer connections. Our team expertly handled the complexities
            of upgrading water mains, isolating water supplies with minimal disruption to the community, and meeting PWC’s sewer standards.
            This success was possible thanks to the specialized skills and knowledge our team brings to every project.
          </p>
          <p>
            We've also kept open communication with PWC about our team's locations while working in remote areas of Central Australia,
            allowing us to quickly address any issues. Our work in these areas includes general plumbing maintenance, water or...
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-xl font-bold mb-2">
            The civil and hydraulic package for the modular project.
          </h3>
          <p className="font-semibold mb-2">Alice Springs Corrections.</p>
          <p className="mb-2">
            Satori Plumbing Solutions was recently chosen to handle the civil and hydraulic work for the modular project at Alice Springs Correctional Centre. Our team installed:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>A full stormwater drainage system, including downpipes, in-ground drainage, and stormwater pits.</li>
            <li>A gas main tap-in and incoming service to the hydraulic room, supporting a complex gas hot water system.</li>
            <li>Tap-ins and extensions for both potable and fire water mains.</li>
            <li>A brand-new hot and cold water system for each module.</li>
            <li>New sanitary drainage for each module, including both aerial and in-ground drainage.</li>
            <li>Five new manholes and a sewer main.</li>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mx-20 lg:grid-cols-4 gap-4 p-4">
        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.7n461WIPXi0ilP057e5ihQHaEK?w=1600&h=900&rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.gqjhy7tPy5owViuI2IyU9gHaE7?rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.dgiMrGsLmtwhC8-Z_ROVzgHaF9?rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://hfbheating.com/wp-content/uploads/2023/04/boiler-repair.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://wallpapercave.com/wp/wp4722795.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://lh3.googleusercontent.com/uhWSWzThz51VgqEzSI-g7SwJs776aqEQfam5HILODD2oKwCP8yV0x0oa3kwSS4T_ZX4I60bUIHG3I1OI05ctf7-jdjkC-X16rIDvjhPz7WPwt7AM9wjG4RuRsHO_MF39=w447"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.C1G1_wMR76HIudu0o4HI9AHaE8?w=500&h=334&rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.xgRFRxeM1rRfoAhJMlpBJgHaE7?w=830&h=553&rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://flowpower.com.au/wp-content/uploads/2022/09/Website-Feature-Images-88.png"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.tAUfOpx0DIgBElZxIwMd0gHaE7?rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://th.bing.com/th/id/OIP.364f2A8ICqc-69oq4Bh7WgHaEc?rs=1&pid=ImgDetMain"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>

        <div className="group cursor-pointer relative">
          <img
            src="https://www.mcnplumbing.com.au/wp-content/uploads/2020/05/gas_fixture_installation_02.jpg"
            alt="Image 1"
            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
