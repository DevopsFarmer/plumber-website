import React from "react";
const service: React.FC = () => {
  return (
    <div className="bg-white">
   
      <section className="container pt-30 md:px-20 bg-white mx-auto text-center p-8">
        <div className="flex items-center w-full gap-4">
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          <h2 className="text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap">
          Services
          </h2>
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
        </div>
      </section>
      <div className="relative bg-white flex items-center justify-center p-8">

      <div className="relative w-full max-w-3xl">
        <img
          src="/image8.png"
          alt="Leakage Detection"
          className="rounded-lg shadow-lg"
        />

        <div className="absolute top-4/7 right-[-90px] transform -translate-y-1/2 bg-white  rounded-lg p-6 w-[400px] border-2 shadow-2xl">

          <div className="flex justify-center mb-4">
            <img src="/image9.png" alt="Leakage Detection Logo" className="" />
          </div>

          <h2 className="text-center text-xl font-semibold text-[#3E180E]">
            Leakage Detection
          </h2>


          <form className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded bg-gray-100 placeholder-black mb-3"
            />

            {/* Call Us Button */}
            <button
              type="submit"
              className="w-full bg-[#D46A34] text-white py-3 rounded text-lg font-bold"
            >
              Call Us
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default service;
