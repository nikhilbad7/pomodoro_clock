import { useState } from 'react';

const Timer = () => {

    const [timerSeconds, setTimerSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState('');
    const [isSessionInterval, setIsSessionInterval] = useState(true);
  
    
  render() {
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
}

export default Timer;