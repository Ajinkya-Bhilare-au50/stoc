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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`btn btn-secondary fixed bottom-20 right-4 z-30 h-10 w-10 rounded-full px-0 shadow-pop transition-all duration-200 ${
        showButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <FaArrowUp className="h-3.5 w-3.5" aria-hidden />
    </button>
  );
};

export default ScrollUpButton;
