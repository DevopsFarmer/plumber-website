import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  avatar: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating,
  avatar,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-white transition-transform transform hover:scale-101 mb-10 rounded-lg shadow-lg p-6 w-[350px] h-auto min-h-[500px] max-w-md mx-auto border-[4px] border-[#D46A34] pb-12 ${className}`}
    >
      <img
        src="/Vector.png"
        className="absolute top-[-30px] left-[10px] w-20"
        alt="Vector"
      />
        <div className="flex flex-col items-center mt-4">
          <h3 className="w-16 h-16 flex items-center justify-center rounded-full shadow-2xl bg-[#3982FF] text-4xl text-center text-white bg-gradient-to-r">
            {name.charAt(0).toUpperCase()}
          </h3>
        </div>


      <h3 className="text-lg font-semibold text-[#444444] px-4 py-2 text-center bg-gradient-to-r rounded-b-lg">
        {name}
      </h3>
      <h3 className="text-[#444444] text-center">1 review</h3>

      <div className="flex items-center my-2">
        {Array.from({ length: rating }).map((_, index) => (
          <img key={index} src="/image 26867.png" alt="Star" className="w-5" />
        ))}
        <h3 className="ml-3 text-sm text-[#444444]">2 months ago</h3>
      </div>
      <div className="bg-[#D46A34] flex-grow h-[0.5px] mb-4"></div>

      <p className="text-gray-700 text-xl">{review}</p>
    </div>
  );
};

export default ReviewCard;
