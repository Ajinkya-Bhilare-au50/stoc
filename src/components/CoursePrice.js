import React, { useState } from "react";
import { MdInfoOutline, MdLocalOffer } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { Link } from "react-router-dom";

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
    <div className="w-full flex justify-center">
      <div className="relative flex flex-col justify-center items-center p-6 bg-[#212121] shadow-lg rounded-lg text-blue-200 border-2 w-full">
        <button
          onClick={handleToggle}
          className="flex items-center px-4 py-2 mb-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
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
        <p className="flex flex-col items-center">
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
              <div className="flex items-center mb-2">
                <MdLocalOffer className="mr-2 text-green-500 hidden" />
                <span className="text-gray-400">Discounted Price:&nbsp;</span>
                <span className="text-sm md:text-lg font-bold text-white">
                  ₹ {discountedPrice}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-red-400 border border-white rounded-full px-4 py-2 text-white flex flex-col items-center justify-center shadow-md">
                <span className="font-bold text-lg">
                  -{discountPercentage}%
                </span>
                <div className="text-sm font-bold">OFF</div>
              </div>
              <div className="flex items-center space-x-2 text-red-200">
                <TfiAlarmClock className="font-bold" />
                <span>
                  <span className="font-bold">1 day</span> left at this price!
                </span>
              </div>
            </>
          ) : (
            <span className="text-gray-400 text-sm">
              Click to see the discounted price
            </span>
          )}
        </p>
        <Link to={"/enquiry"} className="bg-yellow-300 text-gray-900 px-6 py-2 mt-4 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CoursePrice;
