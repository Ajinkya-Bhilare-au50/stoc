import React from "react";
import Copyright from "./Copyright.js";
const Developer = () => {
  return (
    <div>
      <section class="bg-gray-100 p-6 h-72">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center  ">👨‍💻Developer</h2>
          <div class=" p-2 flex flex-col items-center sm:flex-row sm:justify-center sm:items-start ">
            <div class="text-center sm:text-left">
              <div className="flex justify-center">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">
                  Ajinkya
                </h3>
              </div>
              <p className="text-lg text-gray-400 ">
                Website developed in India with ❤️.
              </p>
              <p className="">
                <Copyright />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developer;
