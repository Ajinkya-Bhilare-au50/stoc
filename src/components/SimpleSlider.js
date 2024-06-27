import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-6 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight
        style={{ fontSize: "36px" }}
        className="hover:text-white hover:bg-blue-900 transition duration-300 bg-blue-200 rounded-full p-2"
      />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-6 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft
        style={{ fontSize: "36px" }}
        className="hover:text-white hover:bg-blue-900 transition duration-300 bg-blue-200 rounded-full p-2"
      />
    </div>
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="mx-6 border bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center p-4">
        <img
          src={"https://www.alphacodingskills.com/imgfiles/linked-list.PNG"}
          alt="Coding 1"
          className="mx-auto w-full h-64 object-contain"
        />
        <h3 className="mt-4 text-lg font-semibold">Linked List</h3>
        <p className="mt-2 text-sm text-gray-600">
          A linked list is a fundamental data structure in computer science. It
          consists of nodes where each node contains data and a reference (link)
          to the next node in the sequence. Unlike arrays, linked lists allow
          for dynamic memory allocation and efficient insertion and deletion
          operations.
        </p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white">
        <img
          src={
            "https://introprogramming.info/wp-content/uploads/2013/07/clip_image00213.png"
          }
          alt="Coding 2"
          className="mx-auto w-80 h-64 object-contain"
        />
        <h3 className="mt-4 text-lg font-semibold">Arrays</h3>
        <p className="mt-2 text-sm text-gray-600">
          An array is a linear data structure where all elements are arranged
          sequentially. It serves as a collection of elements of the same data
          type, stored in contiguous memory locations. Imagine an array as a
          flight of stairs, with each step holding a value (let’s say one of
          your friends). By knowing the step count, you can easily locate any
          friend. Similarly, in an array, the position of each element is
          determined by adding an offset to the base value—the memory location
          of the first element (usually denoted by the array’s name). Keep in
          mind that the array’s size is fixed once declared, meaning it cannot
          be changed dynamically.
        </p>
      </div>
      <div className="flex flex-col items-center p-4">
        <img
          src={
            "https://iq.opengenus.org/content/images/2021/11/Minimum-Spanning-tree-example-2.png"
          }
          alt="Coding 2"
          className="w-auto h-64 object-contain mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold">
          Time and Space Complexity
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          <ul>
            <li>
              Time complexity measures the computational time taken by an
              algorithm to execute as a function of the length of the input.
            </li>
            <li>
              Space complexity refers to the amount of memory space an algorithm
              requires to execute as a function of the input size.
            </li>
          </ul>
        </p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white">
        <img
          src={
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png"
          }
          alt="Coding 2"
          className="w-auto h-64 object-contain mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold">Queue</h3>
        <p className="mt-2 text-sm text-gray-600">
          A queue is a linear data structure that follows the First-In-First-Out
          (FIFO) principle. It operates like a line where elements are added at
          one end (rear) and removed from the other end (front).
        </p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white">
        <img
          src={
            "https://cdn.programiz.com/sites/tutorial2program/files/stack.png"
          }
          alt="Coding 2"
          className="w-auto h-64 object-contain mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold">Stack</h3>
        <p className="mt-2 text-sm text-gray-600">
          A stack is a linear data structure that follows the Last-In-First-Out
          (LIFO) principle. Imagine a stack of plates: when you add a new plate,
          it goes on top, and when you remove a plate, you take it from the top.
        </p>
      </div>
      <div className="flex flex-col items-center p-4 bg-white">
        <img
          src={"https://static.javatpoint.com/ds/images/hash-table.png"}
          alt="Coding 2"
          className="w-auto h-64 object-contain mx-auto"
        />
        <h3 className="mt-4 text-lg font-semibold">Hash Table</h3>
        <p className="mt-2 text-sm text-gray-600">
          A hash table (also known as a hash map) is a data structure that
          associates keys with values. It is part of a technique called hashing,
          which involves using a hash function to compute an index (also called
          a hash code) into an array of buckets or slots.
        </p>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
