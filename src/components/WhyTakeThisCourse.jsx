import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const WhyTakeThisCourse = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const courseBenefits = [
    "Learn how to start trading in the stock market.",
    "Understand the basics of shares or stocks.",
    "Gain knowledge about stock exchanges and how they function.",
    "Get insights into trading Futures & Options with limited funds.",
    "Learn how to choose a suitable stock broker for your trading needs.",
    "Receive guidance on how much money to invest in the stock market.",
    "Explore the concept of algorithmic trading and its relevance to your trading strategy.",
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <div className="container mx-auto p-6 sm:p-8 lg:p-10 m-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Why Should I Take This Course?</h2>
          <button
            className="p-2 rounded-full focus:outline-none"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-900" />
            )}
          </button>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          {courseBenefits.map((benefit, index) => (
            <li key={index} className="text-lg">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyTakeThisCourse;
