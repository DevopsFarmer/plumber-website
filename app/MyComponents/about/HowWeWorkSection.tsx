import React from "react";
import StepCard from "./StepCard";

const steps = [
    {
      image: "/aboutImg/image (8).png",  // FIXED: Forward slashes
      title: "We find the best",
      highlightedText: "people to help you",
      description: "You can trust our team of smart, talented Taskers, who have all been thoroughly vetted.",
      reverse: false
    },
    {
      image: "/aboutImg/image 191.png",  // FIXED
      title: "Generate your service",
      highlightedText: "request online",
      description: "Just tell us what you need done and we connect you to qualified Taskers available to help.",
      reverse: true
    },
    {
      image: "/aboutImg/image 192.png",  // FIXED
      title: "You relax while we",
      highlightedText: "take care",
      description: "Service On Wheel helps you live smarter, giving you more time to focus on what's most important.",
      reverse: false
    }
  ];

const HowWeWorkSection: React.FC = () => {
  return (
    <section className="container mx-auto text-center p-8">
      <h2 className="text-3xl font-bold text-blue-900">How we work?</h2>
      <p className="text-gray-500 mt-2">
        We are the smart way to get things done by connecting you with others in your neighborhood.
      </p>

      <div className="mt-8 space-y-8">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-blue-900 mt-10">
        We're big on <span className="text-green-500">Trust & Safety</span>.
      </h3>
    </section>
  );
};

export default HowWeWorkSection;
