import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    image: "/aboutImg/image (8).png",
    title: "We find the best",
    highlightedText: "people to help you",
    description:
      "You can trust our team of smart, talented Taskers, who have all been thoroughly vetted.",
    reverse: false,
  },
  {
    image: "/aboutImg/image 191.png",
    title: "Generate your service",
    highlightedText: "request online",
    description:
      "Just tell us what you need done and we connect you to qualified Taskers available to help.",
    reverse: true,
  },
  {
    image: "/aboutImg/image 192.png",
    title: "You relax while we",
    highlightedText: "take care",
    description:
      "Service On Wheel helps you live smarter, giving you more time to focus on what's most important.",
    reverse: false,
  },
];



const AboutPage = () => {
  return (
    <div className=" bg-white ">
    <header
      className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url("/image 181.png")`,
        backgroundPosition: "center 30px", // Moves the background image 30px down
      }}
    ></header>
      <section className="container md:px-20 bg-white mx-auto text-center p-8">
        <div className="flex items-center w-full gap-4">
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
          <h2 className=" md:text-6xl font-bold text-[#3E180E] text-center whitespace-nowrap">
            How we work?
          </h2>
          <div className="bg-[#D46A34] flex-grow h-[2px]"></div>
        </div>

        <p className="text-xl text-[#3F170FB2] mt-2 mb-16">
          We are the smart way to get things done by connecting you with others in your neighborhood.
        </p>

        <div className="mt-8 space-y-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        <h3 className="text-5xl py-10 font-bold text-black mt-10">
          We're big on <span className="text-[#D46A34]">Trust & Safety</span>.
        </h3>
      </section>
    </div>
  );
};

export default AboutPage;
