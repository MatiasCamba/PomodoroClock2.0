import React from "react";

function SessionPanel({ sessionLength, incrementSession, decrementSession }) {
  return (
    <div className="flex flex-col items-center">
      <h2
        id="session-label"
        className="font-semibold text-4xl text-center font-OpenSans mb-6"
      >
        Session Time
      </h2>
      <div className="bg-buttonSession rounded-full flex flex-1 p-4 w-36">
        <button
          id="session-decrement"
          className="justify-center flex flex-1 text-3xl text-center"
          onClick={decrementSession}
        >
          -
        </button>
        <span className="text-3xl font-OpenSans font-bold" id="session-length">
          {sessionLength}
        </span>
        <button
          id="session-increment"
          className="justify-center flex flex-1 text-3xl text-center"
          onClick={incrementSession}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SessionPanel;
