import React from "react";

const CourseCard = ({
  imageUrl,
  title,
  skills,
  reviews,
  duration,
  difficulty,
}) => {
  return (
    <div className="bg-green-500 p-4  border rounded-lg shadow-md overflow-hidden transform transition-transform duration-1000 ease-in-out hover:scale-105 cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4 ">
        <h3 className="bg-green-100 text-lg font-semibold mb-2">{title}</h3>
        <div className="  text-sm text-gray-600 mb-2">
          <div className="mr-2">{skills}</div>
          <div className="mr-2">{reviews} Reviews</div>
          <div className="mr-2">{duration} Duration</div>
          <div>{difficulty} Difficulty</div>
        </div>
        {/* Additional details or buttons can be added here */}
      </div>
    </div>
  );
};

export default CourseCard;
