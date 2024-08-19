import React from "react";

function TimerDisplay({ timeLeft, isSession }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="flex flex-col border-2 shadow-lg shadow-slate-500/90 text-center mt-20 h-auto p-8 w-36">
      <h3 className="text-2xl font-semibold font-Oswald mb-8" id="timer-label">
        {isSession ? "Session" : "Break"}
      </h3>
      <p className="text-3xl font-semibold m-0 p-0" id="time-left">
        {formatTime(timeLeft)}
      </p>
    </div>
  );
}

export default TimerDisplay;
