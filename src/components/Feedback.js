import React from "react";

const Feedback = ({ name, role, avatarUrl, rating, content }) => {
  return (
    <div className="m-4 bg-customGray w-80 hover:shadow-lg">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none border border-gray-300">
        <div className="mx-4 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-4 sm:pb-8 text-gray-700 shadow-none">
          <img
            src={avatarUrl}
            alt={name}
            className="inline-block h-12 w-12 rounded-full object-cover object-center"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
              </h5>
              <div className="flex items-center px-2 gap-0">
                {[...Array(rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-customYellow"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="block font-sans text-sm font-light leading-relaxed text-blue-gray-900 antialiased">
              {role}
            </p>
          </div>
        </div>
        <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
        <div className="mb-2 p-4 sm:p-0 h-32">
          <p className="p-4 block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
            "{content}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
