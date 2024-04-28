// FAQSection.js

import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Import icons from React-icons

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isOpen: false,
  },
  {
    question: "How can I track my order?",
    answer: "Pellentesque nec odio sit amet lorem aliquam vestibulum.",
    isOpen: false,
  },
  {
    question: "Do you offer gift cards?",
    answer:
      "Nulla facilisi. Sed id neque ultrices, ultricies dolor eu, posuere purus.",
    isOpen: false,
  },
];

const FAQSection = () => {
  const [faqItems, setFaqItems] = useState(faqData);

  const toggleDrawer = (index) => {
    const updatedItems = faqItems.map((item, i) =>
      i === index ? { ...item, isOpen: !item.isOpen } : item
    );
    setFaqItems(updatedItems);
  };

  return (
    <div id="FAQsection" className="max-w-3xl mx-auto py-8 px-4 my-14 h-screen">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      </div>
      <div className="space-y-6 ">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b pb-4 hover:bg-gray-100 transition duration-300"
          >
            <button
              className="flex items-center justify-between w-full font-medium text-gray-900  p-2"
              onClick={() => toggleDrawer(index)}
            >
              {item.question}
              <span className="text-lg">
                {item.isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </span>
            </button>
            {item.isOpen && (
              <p className="text-gray-600 mt-2 px-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
