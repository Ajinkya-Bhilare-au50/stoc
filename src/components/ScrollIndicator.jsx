import React, { useEffect, useState } from "react";
// this component is for the blue bar shown on the top
const Scrollindicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      const percent = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercent(Math.min(100, Math.max(0, percent || 0)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-accent to-accent-2"
      aria-hidden
      style={{ width: `${scrollPercent}%` }}
    />
  );
};

export default Scrollindicator;
