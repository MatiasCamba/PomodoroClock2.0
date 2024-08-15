import React from "react";

function SessionPanel({ sessionLength, incrementSession, decrementSession }) {
  return (
    <div className="flex flex-col">
      <h2
        id="session-label"
        className="text-yellow-100 font-semibold text-2xl text-center"
      >
        Session Time
      </h2>
      <button
        id="session-decrement"
        className="size-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={decrementSession}
      >
        -
      </button>
      <span className="text-2xl">{sessionLength} minutes</span>
      <button
        id="session-increment"
        className="size-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={incrementSession}
      >
        +
      </button>
    </div>
  );
}

export default SessionPanel;
