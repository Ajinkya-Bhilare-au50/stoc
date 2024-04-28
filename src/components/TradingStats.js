import React, { useEffect, useRef } from "react";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";

const TradingStats = () => {
  const happyTradersRef = useRef(null);
  const yearsOfExpertiseRef = useRef(null);
  const followersRef = useRef(null);
  const tradingProgramRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const happyTradersOdometer = new Odometer({
            el: happyTradersRef.current,
            value: 0,
            format: "(,ddd)",
          });
          happyTradersOdometer.update(1000);

          const yearsOfExpertiseOdometer = new Odometer({
            el: yearsOfExpertiseRef.current,
            value: 0,
            format: "(,ddd)",
          });
          yearsOfExpertiseOdometer.update(10);

          const followersOdometer = new Odometer({
            el: followersRef.current,
            value: 0,
            format: "(,ddd)",
          });
          followersOdometer.update(50000);

          const tradingProgramOdometer = new Odometer({
            el: tradingProgramRef.current,
            value: 0,
            format: "(,ddd)",
          });
          tradingProgramOdometer.update(5);

          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(happyTradersRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="m-5 py-8 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Trading Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-xl">Happy Traders</h2>
          <div className="flex justify-center items-center">
            <div
              ref={happyTradersRef}
              className="odometer text-3xl text-blue-900"
            ></div>
            <p className="text-lg text-blue-900">+</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-xl">Years of Expertise</h2>
          <div className="flex justify-center items-center">
            <div
              ref={yearsOfExpertiseRef}
              className="odometer text-3xl text-blue-900"
            ></div>
            <p className="text-lg">+</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-xl">Followers</h2>
          <div className="flex justify-center items-center">
            <div
              ref={followersRef}
              className="odometer text-3xl text-blue-900"
            ></div>
            <p className="text-lg">+</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-semibold mb-2 text-xl">Trading Programs</h2>
          <div className="flex justify-center items-center">
            <div
              ref={tradingProgramRef}
              className="odometer text-3xl text-blue-900"
            ></div>
            <p className="text-lg">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingStats;
