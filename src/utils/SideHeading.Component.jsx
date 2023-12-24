import React from "react";

const SideHeading = ({ Heading }) => {
  return (
    <div>
      <div className="flex text-center items-center">
        <div className="flex justify-center items-center">
          <svg
            className="w-10 h-10 mr-2"
            viewBox="0 0 20 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="w-10 h-10 rounded-md"
              width="20"
              height="40"
              rx="4"
              fill="#DB4444"
            />
          </svg>
        </div>
        <span className="text-md pt-4 font-bold mb-4">{Heading}</span>
      </div>
    </div>
  );
};

export default SideHeading;
