import React, { useState } from "react";

const Accordian = () => {
     const [isExpandedOne, setIsExpandedOne] = useState(false);
     const [isExpandedTwo, setIsExpandedTwo] = useState(false);
     const [isExpandedThree, setIsExpandedThree] = useState(false);
  return (
    <div>
      <div className="p-8 min-h-screen w-full flex items-center justify-center">
        {/* Accordion */}
        <div className="w-full divide-y divide-slate-300 overflow-hidden rounded-xl border border-slate-300 bg-slate-100/40 text-slate-700 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
          <div className="divide-y divide-slate-300 dark:divide-slate-700">
            <button
              id="controlsAccordionItemOne"
              type="button"
              className={`flex w-full items-center justify-between gap-4 bg-slate-100 p-4 text-left underline-offset-2 hover:bg-slate-100/75 focus-visible:bg-slate-100/75 focus-visible:underline focus-visible:outline-none dark:bg-slate-800 dark:hover:bg-slate-800/75 dark:focus-visible:bg-slate-800/75 ${
                isExpandedOne
                  ? "text-onSurfaceStrong dark:text-onSurfaceDarkStrong font-bold"
                  : "text-onSurface dark:text-onSurfaceDark font-medium"
              }`}
              aria-controls="accordionItemOne"
              onClick={() => setIsExpandedOne(!isExpandedOne)}
              aria-expanded={isExpandedOne ? "true" : "false"}
            >
              What browsers are supported?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                className={`size-5 shrink-0 transition ${
                  isExpandedOne ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isExpandedOne && (
              <div
                id="accordionItemOne"
                role="region"
                aria-labelledby="controlsAccordionItemOne"
                className="p-4 text-sm sm:text-base text-pretty"
              >
                Our website is optimized for the latest versions of Chrome,
                Firefox, Safari, and Edge. Check our{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 text-blue-700 dark:text-blue-600"
                >
                  documentation
                </a>{" "}
                for additional information.
              </div>
            )}
          </div>
          {/* Repeat the above structure for the remaining accordion items */}
        </div>
        {/* /Accordion */}
      </div>
    </div>
  );
}

export default Accordian
