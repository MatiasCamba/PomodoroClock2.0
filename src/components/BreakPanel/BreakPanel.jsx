import React from "react";

function BreakPanel({ breakLength, incrementBreak, decrementBreak }) {
 
  return (
    <div className="flex flex-col align-middle justify-center box-content">
      <h2
        id="break-label"
        className="text-yellow-100 font-semibold text-2xl text-center"
      >
        Break Time
      </h2>
      <button id="break-increment">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={incrementBreak}
       
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
      </button>
      <span className="text-2xl" id="break-length">{breakLength}</span>
      <button  id="break-decrement">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={decrementBreak}
         
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
      </button>
    </div>
  );
}

export default BreakPanel;
