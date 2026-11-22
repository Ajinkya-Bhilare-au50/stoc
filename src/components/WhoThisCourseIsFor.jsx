import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const WhoThisCourseIsFor = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const targetAudience = [
    "This course is ideal for anyone looking to quickly get started in stock market trading or investing.",
    "This course is probably not for you if you are CFA, FRM, or CMT qualified.",
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
          <h2 className="text-3xl font-bold">Who This Course Is For ?</h2>
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
          {targetAudience.map((audience, index) => (
            <li key={index} className="text-lg">
              {audience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhoThisCourseIsFor;
