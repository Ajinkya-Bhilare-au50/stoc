import React from 'react'
import { CircularProgress } from "@material-tailwind/react";
function Redirecting() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <CircularProgress color="blue" />
        <h2 className="mt-4 text-lg font-semibold text-gray-700">
          Redirecting...
        </h2>
      </div>
    </div>
  );
}

export default Redirecting
