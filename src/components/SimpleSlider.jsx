import React from "react";
import SlickSlider from "react-slick";
import { interopDefault } from "../lib/interopDefault";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slider = interopDefault(SlickSlider);

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Next concept"
      onClick={onClick}
      className="btn btn-secondary absolute right-3 top-3 z-10 h-9 w-9 rounded-full px-0"
    >
      <FaArrowRight className="h-3.5 w-3.5" />
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Previous concept"
      onClick={onClick}
      className="btn btn-secondary absolute left-3 top-3 z-10 h-9 w-9 rounded-full px-0"
    >
      <FaArrowLeft className="h-3.5 w-3.5" />
    </button>
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
    <section className="section-tight">
      <div className="container-page">
        <p className="eyebrow">Core concepts</p>
        <h2 className="section-title mt-2">Data structures you'll master</h2>
        <div className="card mt-8 px-2 pb-10 pt-14 sm:px-6">
          <Slider {...settings}>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={"https://www.alphacodingskills.com/imgfiles/linked-list.PNG"}
                alt="Coding 1"
                className="mx-auto h-56 w-full max-w-md rounded-tile bg-white object-contain p-3"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Linked List</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                A linked list is a fundamental data structure in computer science. It consists of nodes where
                each node contains data and a reference (link) to the next node in the sequence. Unlike
                arrays, linked lists allow for dynamic memory allocation and efficient insertion and deletion
                operations.
              </p>
            </div>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={"https://introprogramming.info/wp-content/uploads/2013/07/clip_image00213.png"}
                alt="Coding 2"
                className="mx-auto h-56 w-full max-w-md rounded-tile bg-white object-contain p-3"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Arrays</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                An array is a linear data structure where all elements are arranged sequentially. It serves as
                a collection of elements of the same data type, stored in contiguous memory locations. Imagine
                an array as a flight of stairs, with each step holding a value (let’s say one of your
                friends). By knowing the step count, you can easily locate any friend. Similarly, in an array,
                the position of each element is determined by adding an offset to the base value—the memory
                location of the first element (usually denoted by the array’s name). Keep in mind that the
                array’s size is fixed once declared, meaning it cannot be changed dynamically.
              </p>
            </div>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={"https://iq.opengenus.org/content/images/2021/11/Minimum-Spanning-tree-example-2.png"}
                alt="Coding 2"
                className="w-auto h-64 object-contain mx-auto"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Time and Space Complexity</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                <ul>
                  <li>
                    Time complexity measures the computational time taken by an algorithm to execute as a
                    function of the length of the input.
                  </li>
                  <li>
                    Space complexity refers to the amount of memory space an algorithm requires to execute as
                    a function of the input size.
                  </li>
                </ul>
              </p>
            </div>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={
                  "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png"
                }
                alt="Coding 2"
                className="w-auto h-64 object-contain mx-auto"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Queue</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It
                operates like a line where elements are added at one end (rear) and removed from the other end
                (front).
              </p>
            </div>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={"https://cdn.programiz.com/sites/tutorial2program/files/stack.png"}
                alt="Coding 2"
                className="w-auto h-64 object-contain mx-auto"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Stack</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
                Imagine a stack of plates: when you add a new plate, it goes on top, and when you remove a
                plate, you take it from the top.
              </p>
            </div>
            <div className="!flex flex-col items-center px-2 text-center sm:px-10">
              <img
                loading="lazy"
                src={"https://static.javatpoint.com/ds/images/hash-table.png"}
                alt="Coding 2"
                className="w-auto h-64 object-contain mx-auto"
              />
              <h3 className="mt-6 text-lg font-semibold text-ink">Hash Table</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                A hash table (also known as a hash map) is a data structure that associates keys with values.
                It is part of a technique called hashing, which involves using a hash function to compute an
                index (also called a hash code) into an array of buckets or slots.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SimpleSlider;
