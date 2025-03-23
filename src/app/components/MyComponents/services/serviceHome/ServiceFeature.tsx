import React from "react";
import { FaAward, FaBullseye, FaUsers } from "react-icons/fa";

const ServiceFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white rounded-t-2xl py-8 px-6 shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center space-y-2">
          <FaAward className="text-5xl text-white" />
          <p className="text-lg sm:text-xl font-semibold">High Quality Workmanship</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center space-y-2">
          <FaBullseye className="text-5xl text-white" />
          <p className="text-lg sm:text-xl font-semibold">Target Oriented Expertness</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center space-y-2">
          <FaUsers className="text-5xl text-white" />
          <p className="text-lg sm:text-xl font-semibold">Professional & Experienced Team</p>
        </div>

      </div>
    </div>
  );
};

export default ServiceFeatures;
