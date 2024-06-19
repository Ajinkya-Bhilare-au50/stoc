import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons library

const profileImage = "https://cdn.devdojo.com/users/August2022/ajinkya0011.jpg";

const ProfileHeader = ({ name, rating, reviews, students, courses }) => (
  <div className="bg-[#231E39] rounded-lg shadow-md p-6 relative">
    <div className=" items-center">
      <div className="flex justify-center items-center relative">
        <img
          src={profileImage}
          alt={name}
          className="w-20 h-20 rounded-full mr-4"
        />
        {/* Online status dot */}
        {/* <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div> */}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white p-2 text-center">
          {name}
        </h1>
        <div className="flex justify-center">
          <div className="flex items-center ">
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-lg text-white font-semibold p-1">
              {rating}k
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <p className="text-2xl text-center font-semibold text-gray-800 mb-1">
            Course Stats
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center bg-[#231E39] p-4 rounded-md shadow-sm">
              <span className="text-2xl text-blue-600 font-bold">
                {reviews}
              </span>
              <p className="text-sm text-white">Reviews</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#231E39] p-4 rounded-md shadow-sm">
              <span className="text-2xl text-green-600 font-bold">
                {students}
              </span>
              <p className="text-sm text-white">Students</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#231E39] p-4 rounded-md shadow-sm">
              <span className="text-2xl text-yellow-300 font-bold">
                {courses}
              </span>
              <p className="text-sm text-white">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Sidebara = ({ bio }) => (
  <div className="mt-4">
    <h2 className="text-lg font-semibold mb-2 text-black">About Instructor</h2>
    <p className="text-gray-900">{bio}</p>
    {/* Add more Sidebara content as needed */}
  </div>
);

const MainContent = ({ accomplishments }) => (
  <div className="mt-4">
    <h2 className="text-lg font-semibold mb-2">Accomplishments</h2>
    <ul className="list-disc pl-4">
      {accomplishments.map((item, index) => (
        <li key={index} className="text-gray-900">
          {item}
        </li>
      ))}
    </ul>
    {/* Add more main content sections */}
  </div>
);

const AjinkyaProfile = () => {
  const profileData = {
    name: "Ajinkya Bhilare",
    rating: 4.5,
    reviews: 109,
    students: 1000,
    courses: 14,
    bio: "Ajinkya is an esteemed Indian instructor renowned for teaching over 5,000 students worldwide...",
    accomplishments: [
      "Founded LearnToProgram Media",
      "Operates an internet video network",
      "Speaks at prestigious events like TechWeek NY, TechWeek LA, and SXSW",
    ],
  };

  return (
    <div className="mx-auto max-w-lg">
      <ProfileHeader
        name={profileData.name}
        rating={profileData.rating}
        reviews={profileData.reviews}
        students={profileData.students}
        courses={profileData.courses}
      />
      <div className="mt-6">
        <Sidebara bio={profileData.bio} />
        <MainContent accomplishments={profileData.accomplishments} />
      </div>
    </div>
  );
};

export default AjinkyaProfile;
