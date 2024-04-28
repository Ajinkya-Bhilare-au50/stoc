import React from "react";

const ContactUs = () => {
  return (
    <div id="Contactus" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 text-gray-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
          </form>
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Address:</span> 123 Main Street,
              City, Country
            </p>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="mb-2 text-gray-800">
              <span className="font-semibold">Email:</span> info@example.com
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md mr-2 transition duration-300 ease-in-out"
              >
                Facebook
              </a>
              <a
                href="#"
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded-md transition duration-300 ease-in-out"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
