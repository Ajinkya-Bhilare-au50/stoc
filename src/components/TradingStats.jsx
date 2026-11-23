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

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(happyTradersRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const STATS = [
    { label: "Happy traders", ref: happyTradersRef },
    { label: "Years of expertise", ref: yearsOfExpertiseRef },
    { label: "Followers", ref: followersRef },
    { label: "Trading programs", ref: tradingProgramRef },
  ];

  return (
    <section className="section border-t border-line" aria-labelledby="stats-title">
      <div className="container-page">
        <div className="text-center">
          <p className="eyebrow">By the numbers</p>
          <h2 id="stats-title" className="section-title mt-2">
            Trading statistics
          </h2>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map(({ label, ref }) => (
            <div key={label} className="card text-center">
              <dd className="flex items-baseline justify-center gap-0.5 text-3xl font-bold tabular-nums text-ink sm:text-4xl">
                <span ref={ref} className="odometer">
                  0
                </span>
                <span className="text-accent">+</span>
              </dd>
              <dt className="mt-2 text-sm text-ink-muted">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default TradingStats;
