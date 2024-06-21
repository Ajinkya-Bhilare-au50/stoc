import React, { useState } from "react";
import { MdInfoOutline, MdLocalOffer } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";

const calculateDiscountedPrice = (price, discountPercentage) => {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return Math.round(discountedPrice); // Round to the nearest integer
};

const CoursePrice = ({ price, discountPercentage }) => {
  const [showPrice, setShowPrice] = useState(true);

  const handleToggle = () => {
    setShowPrice(!showPrice);
  };

  const originalPrice = parseFloat(price.replace("₹", "")); // Assuming price is in the format "₹ 3999"
  const discountedPrice = calculateDiscountedPrice(
    originalPrice,
    discountPercentage
  );

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center p-4 bg-[#`212121] shadow-lg rounded-lg text-blue-200 border ">
        <button
          onClick={handleToggle}
          className="flex items-center px-6 py-2 mb-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          {showPrice ? (
            "Hide Price"
          ) : (
            <>
              Show Discounted Price
              <RiDiscountPercentFill className="ml-2 text-white" />
            </>
          )}
        </button>
        <p className="flex flex-col items-center ">
          {showPrice ? (
            <>
              <span className="text-lg font-semibold mb-2">Course Pricing</span>
              <div className="flex items-center mb-2">
                <MdInfoOutline className="inline-block mr-2 text-yellow-500" />
                <span className="text-gray-400">Original Price:&nbsp;</span>
                <span className="line-through mr-2 text-sm text-gray-400">
                  ₹ {originalPrice}
                </span>
              </div>
              <div className="flex items-center">
                <MdLocalOffer className=" mr-2 text-green-500 hidden" />
                <span className="text-gray-400">Discounted Price:&nbsp;</span>
                <span className="text-sm md:text-lg font-bold text-white ">
                  ₹ {discountedPrice}
                </span>
                <div className="relative inline-block px-2 ">
                  <div className="bg-red-400 w-auto border border-s-white rounded-full px-4 py-2 text-white flex flex-col items-center justify-center">
                    <span className="font-bold text-white text-lg">
                      -{discountPercentage}%
                    </span>
                    <div className="text-white font-bold text-sm">OFF</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-red-200">
                <TfiAlarmClock className="font-bold" />
                <span>
                  <span className="font-bold"> 1 day</span> left at this price!
                </span>
              </div>
            </>
          ) : (
            <span className="text-gray-400">
              Click the button to see the discounted price
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CoursePrice;
