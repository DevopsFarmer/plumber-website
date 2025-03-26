import React from "react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating,
  avatar,
}) => {
  return (
    <div className="relative bg-white transition-transform transform hover:scale-105 mb-10 rounded-lg shadow-lg p-6 w-[350px] h-[480] max-w-md mx-auto border-[4px] border-[#D46A34] pb-12">
      <img
        src="/Vector.png"
        className="absolute top-[-30px] left-[10px] w-20 "
      />
      <div className="flex flex-col items-center mt-4">
        <h3 className=" rounded-4xl shadow-2xl w-fit bg-[#3982FF] text-4xl text-center text-white px-5 py-3  bg-gradient-to-r ">
          {name.charAt(0).toUpperCase()}
        </h3>
      </div>

      <h3 className=" left-0 w-full text-lg font-semibold text-[#444444] px-4 py-2 text-center bg-gradient-to-r  rounded-b-lg">
        {name}
      </h3>
      <h3 className=" left-0 w-full  text-[#444444] text-center bg-gradient-to-r  rounded-b-lg">
        1 review
      </h3>

      <div className="flex  my-2">
        {Array.from({ length: rating }).map((_, index) => (
          <img src="/image 26867.png" />
        ))}
        <h3 className=" left-0 w-full mt-1 text-sm text-[#444444] pl-3 bg-gradient-to-r  ">
          2 months ago{" "}
        </h3>
        <img src="/More vert.png" />
      </div>
      <div className="bg-[#D46A34] flex-grow h-[0.5px] mb-4"></div>

      <p className="text-gray-700 text-xl  ">{review}</p>
    </div>
  );
};

export default ReviewCard;
