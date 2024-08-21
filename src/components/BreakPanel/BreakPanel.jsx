import React from "react";

function BreakPanel({ breakLength, incrementBreak, decrementBreak }) {
  return (
    <div className="flex flex-col items-center">
      <h2
        id="break-label"
        className="font-semibold text-4xl text-center font-OpenSans mb-6"
      >
        Break Time
      </h2>
      <div className="bg-buttonBreak rounded-full flex flex-1 p-4 w-36">
        <button
          id="break-decrement"
          className="justify-center flex flex-1 text-3xl text-center"
          onClick={decrementBreak}
        >
          -
        </button>
        <span className="text-3xl font-OpenSans font-bold" id="break-length">
          {breakLength}
        </span>
        <button
          id="break-increment"
          className="justify-center flex flex-1 text-3xl text-center"
          onClick={incrementBreak}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BreakPanel;
