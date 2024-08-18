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
    <div className="bg-amber-100 w-50 h-48 flex flex-col justify-center text-center">
      <h3 className="text-2xl text-orange-950 font-semibold" id="timer-label">
        {isSession ? "Session" : "Break"}
      </h3>
      <p className="text-3xl font-semibold text-orange-800" id="time-left">
        {formatTime(timeLeft)}
      </p>
    </div>
  );
}

export default TimerDisplay;
