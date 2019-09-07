function getNum(){
	return Math.floor(Math.random() * 3);
}

class App extends React.Component {
	render() {
		var fruits = ['🍇', '🍈', '🍉'];

		return (
			<div>
				<h1>TRY YOUR LUCK</h1>
				<Slot 
				s1 = {fruits[getNum()]}
				s2 = {fruits[getNum()]}
				s3 = {fruits[getNum()]}
				/>
				<Slot 
				s1 = {fruits[getNum()]}
				s2 = {fruits[getNum()]}
				s3 = {fruits[getNum()]}
				/>
				<Slot 
				s1 = {fruits[getNum()]}
				s2 = {fruits[getNum()]}
				s3 = {fruits[getNum()]}
				/>


				{/*
				<Hello 
				to="Ringo" 
				from="paulio"
				bangs={15}
				img="https://images.unsplash.com/photo-1567721537939-868edb6564a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				 /> */}
				{/* <Hello to="Rump" from="plop" /> */}
			</div>
		)
		
	}
}

ReactDOM.render(<App />, document.getElementById('root'));