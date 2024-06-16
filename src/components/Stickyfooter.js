import React, { useState, useEffect } from "react";

import Developer from "./Developer.js";
import Banner from "./Banner.js";
const StickyFooter = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [timer, setTimer] = useState(7200); // Timer in seconds (2 hours)

  useEffect(() => {
    // Start the timer when the component mounts
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Show the footer after 5 seconds
    setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleEnrollNow = () => {
    // Add your enrollment logic here
    console.log("Enroll Now button clicked!");
  };

  return (
    <div>
      <div className=" h-64">
        <div className="h-70">
          {/* Your main content */}
          <Developer />

          <p className="text-center">
           
          </p>
        </div>

        {/* Sticky Footer */}
        <div
          className={`fixed z-10 bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-center items-center ${
            showFooter ? "block" : "hidden"
          }`}
        >
          <div className="mb-4 md:mb-0 md:mr-4 text-center md:text-left">
            {timer > 0 ? (
              <p>Offer Ends in {formatTime(timer)}</p>
            ) : (
              <p>Time's up! Enroll now!</p>
            )}
          </div>
          <div>
            <div className="flex justify-center">
              <button
                onClick={handleEnrollNow}
                className="bg-yellow-800 hover:bg-yellow-900 px-6 py-2 rounded-md"
              >
                Subscribe 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
