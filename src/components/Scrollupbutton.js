import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
// scrollup button with arrow
const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-yellow-800 hover:bg-blue-900 text-white rounded-full p-2 shadow-md"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
