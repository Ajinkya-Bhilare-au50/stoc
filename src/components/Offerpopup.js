import React, { useState, useEffect } from "react";

const OfferPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [expirationDate, setExpirationDate] = useState(null);

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Calculate expiration date 2 days from the current date
    const currentDate = new Date();
    const expiration = new Date(currentDate);
    expiration.setDate(expiration.getDate() + 2);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = expiration.toLocaleDateString("en-US", options);
    setExpirationDate(formattedDate);

    // Close the popup after expiration
    const expirationTimeout = setTimeout(() => {
      setShowPopup(false);
    }, expiration.getTime() - currentDate.getTime());

    // Close the popup after 4 seconds
    const hideTimeout = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Clear the timeout when component unmounts
    return () => {
      clearTimeout(expirationTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full p-4 bg-gradient-to-r from-yellow-800 to-yellow-900 shadow-lg rounded-lg ${
        showPopup ? "block" : "hidden"
      } md:w-80 z-20`}
    >
      <div className="flex justify-between items-center max-w-md mx-auto gap-4">
        <p className="text-white font-bold text-center flex-grow">
          🎉 Get Up to 5% OFF on Courses, Learning Paths & PRO | Sale Ends on{" "}
          {expirationDate}
        </p>
        <button
          onClick={handleClose}
          className="text-black-900 focus:outline-none self-start"
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 11.414l3.293 3.293a1 1 0 101.414-1.414L11.414 10l3.293-3.293a1 1 0 10-1.414-1.414L10 8.586 6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;
