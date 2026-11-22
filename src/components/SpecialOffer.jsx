// src/components/SpecialOffer.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  const endDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; // 2 days from now

  const calculateTimeLeft = () => {
    const difference = endDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const getEndDate = () => {
    const date = new Date(endDate);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        className="max-w-md bg-white rounded-lg shadow-xl p-4 text-center text-gray-800"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
          variants={itemVariants}
        >
          Special Offer!
        </motion.h1>
        <motion.p className="text-sm mb-4" variants={itemVariants}>
          Get 5% off on all our premium courses. Limited time offer, don't miss
          out!
        </motion.p>
        <motion.img
          src="https://img.freepik.com/premium-vector/square-sticker-with-5-percent-discount-sale-tag-yellow-red-offer-price-tag-price-discount-symbol_668376-114.jpg"
          alt="Special Offer"
          className="rounded-lg shadow-lg w-48 h-48 object-cover mx-auto mb-4"
          whileHover={{ scale: 1.05 }}
          variants={itemVariants}
        />
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 transition-all mb-2"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          Get Offer
        </motion.button>
        <motion.div className="text-xs" variants={itemVariants}>
          Offer valid till:{" "}
          <span className="font-semibold">{getEndDate()}</span>
        </motion.div>
        <motion.div className="text-xs mt-2" variants={itemVariants}>
          <span className="font-semibold">{timeLeft.days || "0"}</span> Days{" "}
          <span className="font-semibold">{timeLeft.hours || "0"}</span> Hours{" "}
          <span className="font-semibold">{timeLeft.minutes || "0"}</span>{" "}
          Minutes{" "}
          <span className="font-semibold">{timeLeft.seconds || "0"}</span>{" "}
          Seconds
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpecialOffer;
