import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Developer from "./Developer.js";
import Banner from "./Banner.js";
import { Link } from "react-router-dom";
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
    // Add your enrollment/Enquiry logic here
    console.log("Enroll Now button clicked!");
  };

  return (
    <div>
      <div className=" h-64">
        <div className="h-70">
          {/* Your main content */}
          <Developer />

          <p className="text-center"></p>
        </div>

        {/* Sticky Footer */}
        <div
          className={`fixed z-10 bottom-0 left-0 right-0 bg-black text-white pyF-3 flex flex-col md:flex-row justify-center items-center ${
            showFooter ? "block" : "hidden"
          }`}
        >
          <div>
            <div className="flex justify-center md:justify-between m-2">
              <motion.div
                animate={{
                  x: [-5, 5, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Link
                  to={"/enquiry"}
                  onClick={handleEnrollNow}
                  className="bg-yellow-800 hover:bg-yellow-900 px-2 py-1 rounded-md text-black"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="p-1 md:mb-0 md:mr-4 text-center md:text-left">
            {timer > 0 ? (
              <p className="flex gap-1">
                <div className="bg-green-900 text-center px-6 rounded-md">
                  Limited Time Offer
                </div>
                <div className="bg-red-800 text-white px-3 rounded-lg text-1xl shadow-md text-center">
                  {formatTime(timer)}
                </div>
              </p>
            ) : (
              <div className="flex items-center justify-center">
                <p className="px-2 text-lg  text-yellow-400 font-semibold">
                  Time's up! Enroll now!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
