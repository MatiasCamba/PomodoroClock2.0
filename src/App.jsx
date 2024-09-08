import "./App.css";
//Hooks
import { useState, useEffect } from "react";
//Components
import BreakPanel from "./components/BreakPanel/BreakPanel";
import SessionPanel from "./components/SessionPanel/SessionPanel";
import Footer from "./components/Footer/Footer";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";

//Assets
import beep from "../public/assets/beep.mp3";

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
            setIsSession(!isSession);
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
  const decrementSession = () =>
    setSessionLength((prev) => Math.max(prev - 1, 1));

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
    
    <div className="bg-background flex flex-col justify-center items-center">
      <h1 className="h-16 text-center justify-center font-bold text-4xl font-montserrat mt-8">
        POMODORO CLOCK
      </h1>
      <div className="flex flex-col justify-center gap-20 items-center align-middle mt-8">
        <SessionPanel
          sessionLength={sessionLength}
          incrementSession={incrementSession}
          decrementSession={decrementSession}
        />
        <BreakPanel
          breakLength={breakLength}
          incrementBreak={incrementBreak}
          decrementBreak={decrementBreak}
        />
      </div>
      <TimerDisplay timeLeft={timeLeft} isSession={isSession} start={start} restart={restart} isRunning={isRunning} pause={pause}/>
      <Footer/>
    </div>
      
  );
}

export default App;
