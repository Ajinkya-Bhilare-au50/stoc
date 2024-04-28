import React from "react";
import CourseCard from "./Coursecard.js"; // Assuming CourseCard component file path

const CourseList = () => {
  // Array of course data
  const courses = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLC3xNhszdPq-kuhnFYzWZt59fR6jjp4hjop8XXM6wVs6yrctUhrBPNgH2sYHPJEYy_sE&usqp=CAU",
      title: "React Basics",
      skills: "React, JavaScript",
      reviews: 25,
      duration: "6 hours",
      difficulty: "Beginner",
    },
    {
      id: 2,
      imageUrl: "https://i.ytimg.com/vi/OCQCQEH38WI/maxresdefault.jpg",
      title: "Advanced JavaScript",
      skills: "JavaScript, ES6",
      reviews: 18,
      duration: "8 hours",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      imageUrl: "https://i.ytimg.com/vi/OCQCQEH38WI/maxresdefault.jpg",
      title: "Advanced JavaScript",
      skills: "JavaScript, ES6",
      reviews: 18,
      duration: "8 hours",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      imageUrl: "https://i.ytimg.com/vi/OCQCQEH38WI/maxresdefault.jpg",
      title: "Advanced JavaScript",
      skills: "JavaScript, ES6",
      reviews: 18,
      duration: "8 hours",
      difficulty: "Intermediate",
    },
    // Add more course objects as needed
  ];

  return (
    <div className="flex flex-wrap gap-5 bg-yellow-400 justify-center p-10">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          imageUrl={course.imageUrl}
          title={course.title}
          skills={course.skills}
          reviews={course.reviews}
          duration={course.duration}
          difficulty={course.difficulty}
          className="w-full sm:w-1/2 lg:w-1/3 " // Adjust width based on screen size
        />
      ))}
    </div>
  );
};

export default CourseList;
