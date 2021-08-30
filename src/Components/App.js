import { useState } from 'react';
import '../ComponentStyles/App.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import Timer from './Timer';
import Cycle from './Cycle';


function App () {
  const [breakInterval, setBreakInterval] = useState(5);
  const [sessionInterval, setSessionInterval] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setIsPlay] = useState(false);
  const [cycle, setCycle] = useState(1);

  const onPlayChange = (isPlay) =>{
    setIsPlay(isPlay);
  }

  const onBreakIntervalChange = (newBreakLength) => {
    setBreakInterval(newBreakLength);
  }

  const onSessionIntervalChange = (newSessionLength) => {
    setSessionInterval(newSessionLength);
    setTimerMinute(newSessionLength);
  }

  const onTimerMinuteChange = (minuteChange) => {
    setTimerMinute(minuteChange);
  }

  const onResetTimer = () => {
    setSessionInterval(25);
    setTimerMinute(25);
    setBreakInterval(5);
  }

  const cycleHandler = (num) =>{
    setCycle(num);
  }

    return (
      <main className="App">
        <section>
          <h2 className="app-title">Pomodoro Clock</h2>
          <section id="interval-container">
            <BreakInterval
            onBreakIntervalChange = {onBreakIntervalChange}
            breakInterval = {breakInterval}
            isPlay = {isPlay}
            />
            <SessionInterval
            onSessionIntervalChange = {onSessionIntervalChange} sessionInterval = {sessionInterval}
            isPlay = {isPlay}
            />
          </section>
          <Cycle numOfCycles={cycleHandler}/>
          <Timer
          sessionInterval = {sessionInterval}
          timerMinute = {timerMinute}
          onTimerMinuteChange = {onTimerMinuteChange}
          breakInterval = {breakInterval}
          onPlayChange = {onPlayChange}
          resetTimer = {onResetTimer}
          numcycle= { cycle }
          />
        </section>
      </main>
    )
  
}

export default App;
