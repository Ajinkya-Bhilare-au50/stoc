import React from "react";
import StockSlider from "./StockSlider"; // Import the StockSlider component

function StockInfo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="flex flex-col items-center">
        <div className="relative w-70 h-70">
          <img
            src="https://png.pngtree.com/png-vector/20220729/ourmid/pngtree-poker-chip-png-image_6091092.png"
            alt="Poker Chip"
            className="w-full h-full"
          />
          <div className="absolute text-4xl top-1/2 left-1/2 w-30 h-30 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
            <p className="font-bold text-red-100 ">Stocks</p>
          </div>
        </div>
        <h1 className="mt-4 text-3xl font-bold">Latest Trending</h1>
      </header>
      <section className="mt-8 w-full">
        <StockSlider />
      </section>
    </div>
  );
}

export default StockInfo;
