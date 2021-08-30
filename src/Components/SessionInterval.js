function SessionInterval(props) {


  return (
    <section >
      <h4>Session Length</h4>
      <section>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {decreaseCounter}
        className="counter-btn">Down</button>
        <p>{props.sessionInterval}</p>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {increaseCounter}
        className="counter-btn">Up</button>
      </section>
    </section>
  )
}

export default SessionInterval;