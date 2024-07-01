import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import CSVTable from "./CSVTable";
import CoursePaymentButton from "./CoursePaymentButton.js";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // Hide success message after 3 seconds
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="Contactus" className="bg-gray-100 py-16">
      <CSVTable />
      {/* <CoursePaymentButton/> */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            className="bg-white rounded-lg shadow-lg p-6"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1 text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-800 hover:bg-yellow-900 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Send Message
            </button>
            {showSuccess && (
              <div className="flex items-center mt-4 text-green-600">
                <FaCheckCircle className="mr-2" />
                <span>Your message has been sent successfully!</span>
              </div>
            )}
          </motion.form>
          {/* Contact Information */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            variants={infoVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Address:</span> F-203, Mega Street
              building Nerul, Navi Mumbai, India
            </p>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Phone:</span> 8104986663
            </p>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Email:</span> sniper0011@gmail.com
            </p>
            <div className="flex justify-center md:justify-start py-2">
              <a
                href="1"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md mr-2 transition duration-300 ease-in-out"
              >
                <FaFacebook />
              </a>
              <a
                href="v"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md mr-2 transition duration-300 ease-in-out"
              >
                <FaTwitter />
              </a>
              <a
                href="2"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md mr-2 transition duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md mr-2 transition duration-300 ease-in-out"
              >
                <FaLinkedin />
              </a>
              <a
                href="2"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md transition duration-300 ease-in-out"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
