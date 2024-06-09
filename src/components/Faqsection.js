import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Import icons from React-icons

const faqData = [
  {
    question: "What coding languages are taught in the courses?",
    answer:
      "Our coding courses cover a wide range of languages, including JavaScript, Python, Java, HTML/CSS, and more. Each course focuses on practical skills and real-world projects.",
    isOpen: false,
  },
  {
    question: "Do I need any prior experience to enroll in a coding course?",
    answer:
      "No prior experience is required for most of our coding courses. We offer beginner-friendly courses as well as advanced topics for experienced developers.",
    isOpen: false,
  },
  {
    question: "Can I get a certificate upon completion of a coding course?",
    answer:
      "Yes, we provide certificates of completion for our coding courses. These certificates can be valuable for showcasing your skills to employers.",
    isOpen: false,
  },
  {
    question: "What topics are covered in the trading courses?",
    answer:
      "Our trading courses cover a range of topics, including technical analysis, fundamental analysis, risk management, trading strategies, and market psychology.",
    isOpen: false,
  },
  {
    question: "Are the trading courses suitable for beginners?",
    answer:
      "Yes, we offer trading courses tailored for beginners. These courses provide a solid foundation in trading concepts and strategies.",
    isOpen: false,
  },
  {
    question:
      "Do I need any special software or tools for the trading courses?",
    answer:
      "While not mandatory, having access to trading platforms and financial analysis tools can enhance your learning experience in our trading courses.",
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
    <div id="FAQsection" className="max-w-5xl mx-auto py-10 px-8 my-14 h-auto">
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
