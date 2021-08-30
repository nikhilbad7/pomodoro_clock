import { useState } from 'react';

const Timer = () => {

    const [timerSeconds, setTimerSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState('');
    const [isSessionInterval, setIsSessionInterval] = useState(true);
  
    playStopTimer(event) {
    const action = event.target.dataset.type;

    switch (action) {
      case 'play':
        props.onPlayChange(true);
        decreaseTimer();
        break;
      case 'stop':
        props.onPlayChange(false);
        clearInterval(intervalId);
        break;
      default:
        break;
    }
  }

    decreaseTimer() {
    let intervalId = setInterval(() => {
      switch(timerSeconds) {
        case 0:
          if (props.timerMinute === 0) {
            if (isSessionInterval) {
              // start break timer
              setIsSessionInterval(false);
              
              props.onTimerMinuteChange(props.breakInterval);
            } else {
              // start session timer
              setIsSessionInterval(true);
              props.onTimerMinuteChange(props.sessionInterval);
            }
          } else {
            props.onTimerMinuteChange(props.timerMinute - 1);
            setTimerSeconds(59);
            }
          break;
        default:
        setTimerSeconds(timerSeconds-1);
          break;
      }
    }, 1000);

    setIntervalId(intervalId);
    
  }

  resetTimer() {
    clearInterval(intervalId);

    props.resetTimer();
    props.onPlayChange(false);

    setTimerSeconds(0);
    
  }
  
    let timerClass = props.timerMinute === 0 ? "timer-alert" : "";
    timerClass += " session-timer";

    return (
      <section>
        <section id="session-container">
          <h4 className="session-header">{isSessionInterval ? 'Session' : 'Break'}</h4>
          <span
          className={timerClass}>
          {this.props.timerMinute}</span>
          <span
          className={timerClass}
          id="colon">:</span>
          <span
          className={timerClass}>{timerSeconds === 0 ? '00' : timerSeconds < 10 ? '0' + timerSeconds : timerSeconds}</span>
        </section>
        <section id="actions-container">
          <button data-type="play" onClick = {playStopTimer}>Play</button>
          <button data-type="stop" onClick = {playStopTimer}>Stop</button>
          <button onClick = {resetTimer}>Refresh</button>
        </section>
      </section>
    )
  
}

export default Timer;