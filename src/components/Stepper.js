import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const steps = [
  {
    title: "Step 1",
    heading: "Click on ENROLL button to start Admission Process",
    image: "Admission process",
  },
  {
    title: "Step 2",
    heading: "Select your Courses and add them to Cart",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Step 3",
    heading: "Click on Cart Icon",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Final Step",
    heading: "Click on proceed to Payment ",
    image: "https://via.placeholder.com/150",
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="p-4">
      <ul className="relative flex flex-col sm:flex-row gap-y-2 sm:gap-x-2 mb-4">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
              currentStep >= index ? "text-blue-600" : "text-gray-900"
            }`}
          >
            <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center flex-shrink-0 font-medium rounded-full ${
                  currentStep >= index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {currentStep > index ? <FaCheck /> : index + 1}
              </span>
              <span className="ms-2 text-sm font-medium">{step.title}</span>
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-full h-px flex-1 ${
                  currentStep > index ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-5 sm:mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-4 h-auto bg-gray-50 flex flex-col justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ${
              currentStep === index ? "block" : "hidden"
            }`}
          >
            <h3 className="text-gray-500 dark:text-neutral-500 mb-2">
              {step.heading}
            </h3>
            <img
              src={step.image}
              alt={step.heading}
              className="w-32 h-32 mb-2"
            />
          </div>
        ))}

        <div className="mt-5 flex justify-between items-center gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            <AiOutlineArrowLeft />
            Back
          </button>
          {currentStep < steps.length - 1 && (
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleNext}
            >
              Next
              <AiOutlineArrowRight />
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
