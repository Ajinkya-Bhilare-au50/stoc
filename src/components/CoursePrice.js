import React, { useState } from "react";
import { MdInfoOutline, MdLocalOffer } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";

const calculateDiscountedPrice = (price, discountPercentage) => {
  const discountedPrice = price - (price * discountPercentage) / 100;
  return Math.round(discountedPrice); // Round to the nearest integer
};

const CoursePrice = ({ price, discountPercentage }) => {
  const [showPrice, setShowPrice] = useState(false);

  const handleToggle = () => {
    setShowPrice(!showPrice);
  };

  const originalPrice = parseFloat(price.replace("₹", "")); // Assuming price is in the format "₹ 3999"
  const discountedPrice = calculateDiscountedPrice(
    originalPrice,
    discountPercentage
  );

  return (
    <div className="flex flex-col items-center p-4 bg-black shadow-lg rounded-lg text-gray-200">
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
      <p className="flex flex-col items-center">
        {showPrice ? (
          <>
            <span className="text-lg font-semibold mb-2">Course Pricing</span>
            <div className="flex items-center mb-2">
              <MdInfoOutline className="inline-block mr-2 text-yellow-500" />
              <span className="text-gray-400">Original Price:&nbsp;</span>
              <span className="line-through mr-2 text-lg text-gray-400">
                ₹ {originalPrice}
              </span>
            </div>
            <div className="flex items-center">
              <MdLocalOffer className="inline-block mr-2 text-green-500" />
              <span className="text-gray-400">Discounted Price:&nbsp;</span>
              <span className="text-lg font-bold text-white">
                ₹ {discountedPrice}
              </span>
              <span className="ml-2 font-bold text-green-500">
                ({discountPercentage}% off)
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
  );
};

export default CoursePrice;
