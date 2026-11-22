import React from "react";

const SkeletonImage = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded-lg ${className}`}>
      {/* You can adjust the height, width, and other styles as needed */}
    </div>
  );
};

export default SkeletonImage;
// import React from "react";

// const Skeleton = ({ height, width }) => {
//   return (
//     <div
//       className="animate-pulse bg-gray-300 rounded-lg"
//       style={{ height, width }}
//     ></div>
//   );
// };

// export default Skeleton;
