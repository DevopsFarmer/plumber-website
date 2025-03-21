import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, rating, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-160 h-80 border-red">
      {/* Green Sticky Tape */}
      <div className="flex left-0 top-0 mt-4 border-black">
        <div className="w-6 h-6 bg-green-500 rounded-t-md border-red"></div>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center my-2">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="text-yellow-500 text-xl">⭐</span>
        ))}
      </div>

      {/* Review Content */}
      <p className="text-gray-700  text-sm text-center">{review}</p>

      {/* Reviewer Info */}
      <div className="flex flex-col items-center mt-4 ">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-gray-300" />
        <h3 className="text-lg font-semibold mt-2 text-white px-4 py-1 rounded-md bg-gradient-to-r from-[#76200F] to-[#A53C27]">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
