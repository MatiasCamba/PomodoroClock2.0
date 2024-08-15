import "./App.css";
import { useState, useEffect } from "react";
import BreakPanel from "./components/BreakPanel/BreakPanel";
import SessionPanel from "./components/SessionPanel/SessionPanel";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import Controls from "./components/Controls/Controls";
import beep from "../src/assets/beep.mp3"

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25*60);
  const [isSession, setIsSession] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let timer;
    if(isRunning){
      timer = setInterval(()=>{
        setTimeLeft((prev)=>{
            if(prev === 0){
              const audio = new Audio({beep});
              audio.play();
              setIsSession(!isSession);
              return isSession ? breakLength * 60 : sessionLength * 60;
            }
            return prev -1 ;
        })
      },1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, isSession, breakLength,sessionLength]);

  const incrementBreak = () => setBreakLength(prev => Math.min(prev +1 , 60));
  const decrementBreak = () => setBreakLength(prev => Math.min(prev - 1 , 1));
  const incrementSession= () => setSessionLength(prev => Math.min(prev +1, 60));
  const decrementSession = () => setSessionLength(prev => prev - 1, 1);

  const start = () => setIsRunning(!isRunning);
  const pause = () => setIsRunning(!isRunning);
  const restart = () => {
    setBreakLength(5);
    setIsRunning(false);
    setIsSession(true);
    setSessionLength(25);
    setTimeLeft(25 * 60);
  }


  return (
    <div className="w-screen h-screen bg-orange-950">
      <h1 className="h-16 text-center justify-center bg-amber-100 font-bold text-3xl text-orange-950">
       Pomodoro Clock
      </h1>
      <hr className="border-none bg-black h-2"/>
      <div className="flex flex-auto justify-center gap-40 ">
      <BreakPanel breakLength={breakLength} incrementBreak={incrementBreak} decrementBreak={decrementBreak}/>;
      <SessionPanel sessionLength={sessionLength} incrementSession={incrementSession} decrementSession={decrementSession}/>;
      </div>
      <TimerDisplay timeLeft={timeLeft} isSession={isSession}/>
      <Controls start={start} pause={pause} reset={restart}/>
    </div>
  );
}

export default App;
