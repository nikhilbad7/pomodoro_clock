import { useState } from 'react';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import Timer from './Timer';

function App() {

  const [breakInterval, setBreakInterval] = useState(5);
  const [sessionInterval, setSessionInterval] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setIsPlay] = useState(false);

  onPlayChange(isPlay) {
    setIsPlay(isPlay);
  }

  onBreakIntervalChange(newBreakLength) {
    setBreakInterval(newBreakLength);
  }

  onSessionIntervalChange(newSessionLength) {
    setSessionInterval(newSessionLength);
    setTimerMinute(newSessionLength);

  }

  onTimerMinuteChange(minuteChange) {
    setTimerMinute(minuteChange);
    
  }

  onResetTimer() {
    setSessionInterval(25);
    setTimerMinute(25);
    setBreakInterval(5);
  }

  return (
    <main className="App">
      <section>
        <h2>Pomodoro Clock</h2>
        <section>
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
        <Timer 
          sessionInterval = {sessionInterval}
          timerMinute = {timerMinute}
          onTimerMinuteChange = {onTimerMinuteChange}
          breakInterval = {breakInterval}
          onPlayChange = {onPlayChange}
          resetTimer = {onResetTimer}
        />
      </section>      
    </main>
  );
}

export default App;
