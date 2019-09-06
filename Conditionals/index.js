function getNum(){
	return Math.floor(Math.random() * 10) +1;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num > 5){
			msg = 
				<div>
					<h2>YOU WIN</h2>
				</div>
		} else {
			msg = 
				<div>
					<p>you loose sucka</p>
				</div>
		}
		return (
			<div>
				<h1>Your number is... {num}</h1>
				{/* <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p> */}
				{msg}
			</div>
			
		)
	}
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));