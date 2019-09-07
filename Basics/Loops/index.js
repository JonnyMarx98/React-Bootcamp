class App extends React.Component {
	render() {
		return (
			<div>
				<Friend 
				name = "Elton"
				hobbies = {['Piano', 'Football', 'pooping']}
				/>
				<Friend 
				name = "Eltonsdfasdf"
				hobbies = {['Pianoasdd', 'Foosdftball', 'pooping']}
				/>
			</div>
		)		
	}
}

ReactDOM.render(<App />, document.getElementById('root'));