import  { useState } from 'react';
import '../ComponentStyles/SessionActions.css';
import '../ComponentStyles/Timer.css';

const Timer = (props) => {
  
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState('');
    const [isSessionInterval, setIsSessionInterval] = useState(true);

   

  const playStopTimer = (event) => {
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

  const decreaseTimer = () => {
    let intervalId = setInterval(() => {
      switch(timerSeconds) {
        case 0:
          if (props.timerMinute === 0) {
            if (isSessionInterval) {
              // start break timer
              setIsSessionInterval(false);
              props.onTimerMinuteChange(props.breakInterval);
            } 
            else {
              // start session timer
              setIsSessionInterval(true);
              props.onTimerMinuteChange(props.sessionInterval);
            }
          }
           else {
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

  const resetTimer = () => {
    clearInterval(intervalId);

    props.resetTimer();
    props.onPlayChange(false);

    setTimerSeconds(0);
  }

  
    let timerClass = this.props.timerMinute === 0 ? "timer-alert" : "";
    timerClass += " session-timer";
    return (
      <section>
        <section id="session-container">
          <h4 className="session-header">{this.state.isSessionInterval ? 'Session' : 'Break'}</h4>
          <span
          className={timerClass}>
          {this.props.timerMinute}</span>
          <span
          className={timerClass}
          id="colon">:</span>
          <span
          className={timerClass}>{this.state.timerSeconds === 0 ? '00' : this.state.timerSeconds < 10 ? '0' + this.state.timerSeconds : this.state.timerSeconds}</span>
        </section>
        <section id="actions-container">
          <button data-type="play" onClick = {this.playStopTimer}>Play</button>
          <button data-type="stop" onClick = {this.playStopTimer}>Stop</button>
          <button onClick = {this.resetTimer}>Refresh</button>
        </section>
      </section>
    )
  
}

export default Timer;