import React from "react";
import candlestickImage from "./images/candlestickbackground.jpg";

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4 h-screen">
      {/* Candlestick background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-40"
        style={{
          backgroundImage: `url(${candlestickImage})`,
        }}
      ></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Master Stock Dynamics
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Unlock Your Potential with Stock Experts
        </p>
        <button className="bg-yellow-800 hover:bg-yellow-900   text-white px-8 py-3 rounded-md shadow-md">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
