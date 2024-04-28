import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 dark:bg-gray-800">
      <p className="text-sm text-gray-400 dark:text-gray-200">
        Copyright © {currentYear} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Copyright;
