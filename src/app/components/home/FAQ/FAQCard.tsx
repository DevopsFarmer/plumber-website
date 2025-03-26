"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer emergency plumbing services?",
    answer:
      "Yes! We provide 24/7 emergency plumbing across Australia for urgent leaks, burst pipes, and other critical issues.",
  },
  {
    question: "Do you service both residential and commercial properties?",
    answer:
      "Yes, many plumbing services provide home visits for repairs and installations.",
  },
  {
    question:
      "How do I book a plumbing service?",
    answer:
      "Arrival times vary, but most plumbers arrive within 30 minutes to 2 hours based on availability.",
  },
  {
    question: "Do you offer fixed pricing or hourly rates?",
    answer:
      "The cost depends on the job complexity, typically ranging from ₹200 to ₹1500 per task.",
  },
  {
    question: "Do you work on weekends and public holidays?",
    answer:
      "The cost depends on the job complexity, typically ranging from ₹200 to ₹1500 per task.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "The cost depends on the job complexity, typically ranging from ₹200 to ₹1500 per task.",
  },
];

const FAQCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:px-20 min-h-screen bg-white flex flex-col justify-center p-6 ">
      <div className="container px-6 flex items-center gap-4 mt-6 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3E180E] whitespace-nowrap">
          Frequently Asked Questions
        </h2>
        <div className="bg-[#D46A34] flex-grow h-[1px]"></div>
      </div>

      <p className="text-[#3E180E] pl-6 font-bold text-xl mb-6">
        Your questions, Answered.
      </p>

      <div className="flex justify-center w-full items-center">
        <div className="w-full max-w-7xl p-2 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" text-[#3F170F] text-center  rounded-lg shadow-md mb-4 w-full border-[#D46A34]  border-[3px]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between pl-12  w-full text-left px-6 text-xl py-3 font-bold"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className=" py-4 text-[#3E180E] text-xl opacity-80">
                   <div className="bg-[#D46A34] flex-grow h-[1px]"></div>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
