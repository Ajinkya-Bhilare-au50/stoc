import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import bannerimage from "./images/bannerbg.png";

function Banner() {
  const handleJoinWhatsAppGroup = () => {
    // Add your logic to join the WhatsApp group
    window.open("https://chat.whatsapp.com/your-group-id", "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden h-screen pt-2">
      <img
        src={bannerimage}
        alt="Banner Background"
        className="w-full h-full object-cover object-center md:h-auto" // Set height to auto on medium and larger screens
        style={{ objectPosition: "center bottom" }}
      />
      <div className="absolute inset-0 flex items-start justify-center pt-28">
        <h1 className="text-white text-4xl sm:text-2xl lg:text-7xl font-bold text-capital">
          {" "}
          {/* Adjusted text sizes for different screen sizes */}
          Sniper Coding
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 p-4 flex items-center space-x-2">
        <a
          href="https://api.whatsapp.com/send?phone=whatsapp-number"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-2xl md:text-3xl " // Resize WhatsApp icon for mobile and larger screens
        >
          <FaWhatsapp />
        </a>
        <button
          onClick={handleJoinWhatsAppGroup}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hidden md:block hover:bg-green-700" // Hide button on small screens, show on medium and larger screens
        >
          Join WhatsApp Group
        </button>
      </div>
      <div className="md:hidden absolute bottom-0 left-0 p-4 flex items-center justify-center w-full">
        {/* Show button on small screens, center it horizontally */}
        <button
          onClick={handleJoinWhatsAppGroup}
          className="bg-green-500 text-white px-4 py-1 rounded-lg w-full md:w-auto  hover:bg-green-700" // Make button full width on small screens, auto width on larger screens
        >
          Join WhatsApp Group
        </button>
      </div>
    </div>
  );
}

export default Banner;
