function BreakInterval(props) {
  

  return (
    <section >
      <h4>Break Length</h4>
      <section>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {decreaseCounter}
        className='counter-btn'
        >Down</button>
        <p>{props.breakInterval}</p>
        <button
        disabled = {props.isPlay ? "disabled" : ""}
        onClick = {increaseCounter}
        className="counter-btn">Up</button>
      </section>
    </section>
  )
}

export default BreakInterval;