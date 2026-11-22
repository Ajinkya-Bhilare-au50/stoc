import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

const AvatarGroupStack = () => {
  const avatars = [
    {
      name: "Neha",
      email: "user1@example.com",
      avatar:
        "https://img.freepik.com/premium-photo/south-indian-girl-with-long-black-hair-is-standing-crowd_905085-76.jpg",
    },
    {
      name: "Mahesh",
      email: "user2@example.com",
      avatar:
        "https://fly.storage.tigris.dev/pai-images/1c6bead1156b48a2ac9653e7d7e7b95f.jpeg",
    },
    {
      name: "Shivam",
      email: "user3@example.com",
      avatar:
        "https://pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive-681x1024.jpg",
    },
    {
      name: "Sheetal",
      email: "user4@example.com",
      avatar:
        "https://img.freepik.com/free-photo/portrait-beautiful-indian-woman_23-2150913228.jpg",
    },
    {
      name: "Payal",
      email: "user5@example.com",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte5fcMOTmjtpS_mbhx8pSttA5Oy0OmCwfgA&usqp=CAU",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 cursor-pointer">
      {avatars.map((avatar, index) => (
        <motion.img
          key={index}
          whileHover={{ scale: 1.1, border: "2px solid white" }} // Zoom effect and border on hover
          data-tooltip-id={`my-tooltip-${index}`}
          data-tooltip-content={avatar.name}
          src={avatar.avatar}
          alt={avatar.name}
          className="w-12 h-12 md:w-20 md:h-20 rounded-full flex-shrink-0" // Adjusted image width for mobile view
        />
      ))}
      {avatars.map((avatar, index) => (
        <Tooltip
          key={index}
          id={`my-tooltip-${index}`}
          place="bottom"
          effect="solid"
          style={{
            backgroundColor: "#03DBFE",
            color: "black",
            borderRadius: "4px",
            padding: "8px",
            fontSize: "14px",
            maxWidth: "400px",
          }}
        >
          {avatar.name}
        </Tooltip>
      ))}
    </div>
  );
};

export default AvatarGroupStack;
