import '../ComponentStyles/Cycle.css';
import { useRef } from 'react';

const Cycle = (props) => {

	const itemInputRef = useRef();

	const submitHandler = (event) =>{
		event.preventDefault();
		const enteredItem = itemInputRef.current.value;
		if(isNaN(enteredItem)){
			alert('please enter number');
		}
		props.numOfCycles(+enteredItem);
		itemInputRef.current.value = '';
	}

	return (
		<div className="input">
				<form onSubmit={submitHandler}>
				<input type="text"   ref={itemInputRef} required/>
				<button className="button" type="submit">Add Cycles</button>
				</form>	
		</div>		
		)
}

export default Cycle;