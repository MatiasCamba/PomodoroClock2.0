import React from "react";

function SessionPanel({ sessionLength, incrementSession, decrementSession }) {
  console.log("mi estado de la sesion", sessionLength);

  return (
    <div className="flex flex-col box-content">
      <h2
        id="session-label"
        className="text-yellow-100 font-semibold text-2xl text-center"
      >
        <span id="timer-label">Session Time</span>
      </h2>
      <button id="session-increment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          onClick={incrementSession}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
      <span className="text-2xl" id="session-length">
        {sessionLength}
      </span>
      <button id="session-decrement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          onClick={decrementSession}
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

export default SessionPanel;
