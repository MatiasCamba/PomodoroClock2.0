import React from "react";

function TimerDisplay({ timeLeft, isSession }) {
  return (
    <div className="bg-amber-100 w-50 h-48 flex flex-col justify-center text-center">
      <h3 className="text-2xl text-orange-950 font-semibold">
        {isSession ? "Session" : "Break"}
      </h3>
      <span className="text-3xl font-semibold text-orange-800">{timeLeft}</span>
    </div>
  );
}

export default TimerDisplay;
