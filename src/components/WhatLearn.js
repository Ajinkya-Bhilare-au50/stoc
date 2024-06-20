import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const WhatYoullLearn = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const learningObjectives = [
    "Get answers to most frequently asked questions by beginners related to stock trading or investing!",
    "Understand Financial Statement of Companies you would like to invest.",
    "Learn Activity Ratios Liquidity Ratios, Solvency Ratios and Financial Ratios.",
    "Learn Graham's Number & identify undervalued stocks.",
    "Profit from a trade setup for all time frames & asset classes that can also be used for stock trading.",
    "Learn Gaps Trading.",
    "Learn popular technical indicators.",
    "Start trading / investing in the stock market.",
    "Analyze Financial Statements using Ratio Analysis & Common Size Analysis.",
    "Learn Benjamin Graham's value investing strategy.",
    "Apply Technical Analysis for stock trading.",
    "Learn Candlesticks Pattern - applicable to all kinds of financial trading including stock trading.",
    "Learn Technical Analysis concepts like Support & Resistance / Trend Line & Trend Channels.",
    "Get Tips on Money Management.",
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
          <h2 className="text-3xl font-bold">What You'll Learn</h2>
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
          {learningObjectives.map((objective, index) => (
            <li key={index} className="text-lg">
              {objective}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYoullLearn;
