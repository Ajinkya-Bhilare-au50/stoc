import React, { useEffect, useState } from "react";
// this component is for the blue bar shown on the top
const Scrollindicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const percent = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-2.5 bg-blue-500"
      style={{ width: `${scrollPercent}%` }}
    />
  );
};

export default Scrollindicator;
