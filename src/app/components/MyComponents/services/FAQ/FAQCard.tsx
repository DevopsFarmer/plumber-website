"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book plumber services near me in Nagpur?",
    answer: "You can book plumber services in Nagpur through online platforms or by calling local plumbing service providers.",
  },
  {
    question: "Does plumbing services at home in Nagpur?",
    answer: "Yes, many plumbing services provide home visits for repairs and installations.",
  },
  {
    question: "If I book a plumber in Nagpur, how much time will it take to come?",
    answer: "Arrival times vary, but most plumbers arrive within 30 minutes to 2 hours based on availability.",
  },
  {
    question: "How much do most plumbers charge per job?",
    answer: "The cost depends on the job complexity, typically ranging from ₹200 to ₹1500 per task.",
  },
];

const FAQCard = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center p-6 ">
      <h2 className="text-[#3E180E] text-4xl font-bold mb-4 ">
        Frequently Asked Questions
      </h2>
      <p className="text-[#3E180E] font-bold text-lg mb-6">
        Your questions, Answered. _______
      </p>

      <div className="flex justify-center items-center">
  <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-lg">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="bg-[#3E180E] text-white text-center rounded-lg shadow-md mb-4 w-full bg-gradient-to-r from-[#76200F] to-[#A53C27]"
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="flex justify-between items-center w-full text-left px-6 py-4 font-semibold"
        >
          <span dangerouslySetInnerHTML={{ __html: `Q. ${faq.question}` }} />
          <ChevronDown
            className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
          />
        </button>
        {openIndex === index && (
          <div className="px-6 py-4 text-[#3E180E] opacity-80">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default FAQCard;
