// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const TooltipWithZoomImage = () => {
//   const imageArray = [
//     {
//       id: 1,
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGki1jL7eP5SU3DPOwY-BVfk9DMKxOn-yGdpvRBpqVvyZozTB61xVsEkVNTo1SNMeUGk&usqp=CAU",
//       name: "Name 1",
//     },
//     {
//       id: 2,
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGki1jL7eP5SU3DPOwY-BVfk9DMKxOn-yGdpvRBpqVvyZozTB61xVsEkVNTo1SNMeUGk&usqp=CAU",
//       name: "Name 2",
//     },
//     {
//       id: 3,
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGki1jL7eP5SU3DPOwY-BVfk9DMKxOn-yGdpvRBpqVvyZozTB61xVsEkVNTo1SNMeUGk&usqp=CAU",
//       name: "Name 1",
//     },
//     {
//       id: 4,
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGki1jL7eP5SU3DPOwY-BVfk9DMKxOn-yGdpvRBpqVvyZozTB61xVsEkVNTo1SNMeUGk&usqp=CAU",
//       name: "Name 2",
//     },
//     // Add more image objects as needed
//   ];

//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <div className="flex -space-x-2 p-2">
//       {imageArray.map((image) => (
//         <div className="hs-tooltip inline-block cursor-pointer" key={image.id}>
//           <motion.img
//             className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
//             src={image.url}
//             alt="Image Description"
//             whileHover={{ scale: 1.1 }}
//             onMouseEnter={() => setHoveredId(image.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           />
//           <span
//             className={`hs-tooltip-content ${
//               hoveredId === image.id
//                 ? "opacity-100 visible"
//                 : "opacity-0 invisible"
//             } inline-block absolute z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700`}
//             role="tooltip"
//           >
//             {image.name}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TooltipWithZoomImage;
// /* */

import React, { useState } from "react";
import { motion } from "framer-motion";

const TooltipWithZoomImage = ({ imageArray }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex -space-x-2 p-2">
      {imageArray.map((image) => (
        <div className="hs-tooltip inline-block cursor-pointer" key={image.id}>
          <motion.img
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
            src={image.url}
            alt="Image Description"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
          <span
            className={`hs-tooltip-content ${
              hoveredId === image.id
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            } inline-block absolute z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700`}
            role="tooltip"
          >
            {image.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TooltipWithZoomImage;
