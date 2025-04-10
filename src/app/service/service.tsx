"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getServiceData } from "./learningSection.server";
import { motion } from "framer-motion";
import Link from "next/link";
const Service: React.FC = () => {
  const searchParams: any = useSearchParams();
  const service = searchParams.get("service");
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (service) {
        const serviceData: any = await getServiceData(service);
        setSelectedService(serviceData);
      }
    };
    fetchData();
  }, [service]);

  if (!selectedService) {
    return (
      <motion.div
        className="h-96 max-w-screen-2xl pl-8 mx-auto flex flex-col justify-center border-b-[1px] border-gray-500 text-white items-center bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl md:text-6xl uppercase font-bold"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.h1>
      </motion.div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative md:mt-24 w-full min-h-[500px] pt-30 md:px-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            src={selectedService.img}
            className="w-full h-full object-cover"
            alt="Service Background"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative flex items-center h-full w-full z-10">
          <div className="w-full  p-6 md:p-12 lg:pl-20">
            <motion.div
              className=" p-6 md:p-8 rounded-xl shadow-lg "
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 dark:text-white text-gray-900 capitalize tracking-wide">
                {selectedService.label.replace(/-/g, " ")}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                {selectedService.herotext}
              </p>

              <Link
                href="tel:+918824760689"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md"
              >
                Call Us
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="bg-white py-12 px-4 md:px-8 lg:px-20 md:mx-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-red-500 mb-6">
          {selectedService.text1}
        </h1>

        <div className="w-24 h-1 bg-red-500 mx-auto mb-8" />

        <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
          {selectedService.text2}
        </h2>

        <p className="text-base md:text-lg text-gray-800 mb-6">
          {selectedService.text3}
        </p>

        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          {selectedService.text4}
        </p>
      </motion.div>

      {/* Card Section */}
      <motion.div
        className="bg-red-100 py-12 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={selectedService.cardimg}
              alt="Civil Plumbing"
              className="rounded-lg w-full h-auto shadow-md"
            />
          </motion.div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              {selectedService.cardtext}
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-4">
              {selectedService.cardtext1}
            </p>
            <p className="text-gray-700 mb-4">{selectedService.cardtext2}</p>
            <ul className="list-disc list-inside space-y-1">
              {selectedService.learnings.map((item: string, index: number) => (
                <li key={index}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 mb-6">{selectedService.cardtext3}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
            >
              VIEW OUR PROJECTS
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Service;

//     <div className="bg-white">
//       <section className="container pt-30 md:px-20 bg-white mx-auto text-center p-8">
//         <div className="flex items-center w-full gap-4">
//           <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
//           <h2 className="text-2xl md:text-6xl font-bold text-black text-center whitespace-nowrap">
//             {selectedService.label.replace(/-/g, " ")}
//           </h2>
//           <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
//         </div>
//       </section>

//       <div className="relative bg-white flex flex-wrap items-center justify-center p-8">
//   <div className="relative w-full max-w-3xl">
//     <Image
//       src={selectedService.img}
//       alt="Leakage Detection"
//       width={1000}
//       height={800}
//       className="rounded-lg shadow-lg w-full object-cover"
//     />

//     <div className="flex justify-center mt-6 md:mt-0">
//       <div className="bg-white rounded-lg p-6 w-full sm:max-w-[400px] border-2 shadow-2xl
//                       mx-auto md:mx-0 md:absolute md:top-4/7 md:right-[-90px] md:transform -translate-y-1/7 md:-translate-y-1/2">
//         <div className="flex justify-center mb-4">
//           <Image
//             src={selectedService.icons}
//             alt="Leakage Detection Logo"
//             width={80}
//             height={80}
//             className="w-20 h-20"
//           />
//         </div>

//         <h2 className="text-center text-lg md:text-xl font-semibold text-black">
//           {selectedService.label.replace(/-/g, " ")}
//         </h2>

//         <form className="mt-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
//           />
//         <Link href="tel:+918824760689">
//           <button
//             type="submit"
//             className="w-full bg-[#D46A34] text-white py-3 rounded text-lg font-bold hover:bg-[#b85527] transition"
//           >
//             Call Us
//           </button>
//         </Link>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
