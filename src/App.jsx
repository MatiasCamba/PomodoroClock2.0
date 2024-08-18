import "./App.css";
import { useState, useEffect } from "react";
import BreakPanel from "./components/BreakPanel/BreakPanel";
import SessionPanel from "./components/SessionPanel/SessionPanel";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import Controls from "./components/Controls/Controls";
import beep from "../src/assets/beep.mp3";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(isSession ? sessionLength * 60 : breakLength * 60);
    }
  }, [sessionLength, breakLength, isSession]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            const audio = new Audio(beep);
            audio.play();
            setIsSession((prevIsSession) => !prevIsSession);
            return isSession ? breakLength * 60 : sessionLength * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isSession, breakLength, sessionLength]);
  


  const incrementBreak = () => setBreakLength((prev) => Math.min(prev + 1, 60));
  const decrementBreak = () => setBreakLength((prev) => Math.max(prev - 1, 1));
  const incrementSession = () =>
    setSessionLength((prev) => Math.min(prev + 1, 60));
  const decrementSession = () =>setSessionLength((prev) => Math.max(prev - 1, 1));

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const restart = () => {
    setBreakLength(5);
    setSessionLength(25);
    setIsRunning(false);
    setIsSession(true);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="bg-background border-2">
      <h1 className="h-16 text-center justify-center bg-amber-100 font-bold text-3xl text-orange-950">
        Pomodoro Clock
      </h1>
      <hr className="border-none bg-black h-2" />
      <div className="flex flex-auto justify-center gap-40 ">
        <BreakPanel
          breakLength={breakLength}
          incrementBreak={incrementBreak}
          decrementBreak={decrementBreak}
        />
        <SessionPanel
          sessionLength={sessionLength}
          incrementSession={incrementSession}
          decrementSession={decrementSession}
        />
      </div>
      <TimerDisplay timeLeft={timeLeft} isSession={isSession} />
      <Controls start={start} pause={pause} restart={restart} />
    </div>
  );
}

export default App;
