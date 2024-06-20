import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Collapse from "react-collapse";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqData = [
    {
      question: "What is stdock trading?",
      answer:
        "Stock trading involves buying and selling shares of publicly traded companies.",
    },
    {
      question: "How do I get started with stock trading?",
      answer:
        "You can start by opening a brokerage account and learning about market basics.",
    },
    {
      question: "Is stock trading risky?",
      answer:
        "Yes, stock trading carries risks, and its important to educate yourself before investing.",
    },
    {
      question: "Can I trade stocks without a broker?",
      answer:
        "No, you need a brokerage account to trade stocks on stock exchanges.",
    },
  ];

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="flex items-center justify-between p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              {expandedIndex === index ? (
                <FaMinus className="text-gray-600" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </button>
            <Collapse isOpened={expandedIndex === index}>
              <div className="p-4 bg-gray-100">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
