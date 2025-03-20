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
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        Your questions, Answered.
      </p>

      <div className="w-full max-w-6xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-blue-900 text-white rounded-lg shadow-md mb-4 w-full">
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
              <div className="px-6 py-4 bg-blue-800 text-gray-200">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQCard;
