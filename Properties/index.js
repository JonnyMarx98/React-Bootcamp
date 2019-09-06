class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
				to="Ringo" 
				from="paul"
				bangs={4}
				 />
				<Hello 
				to="Ringo" 
				from="paulio"
				bangs={15}
				img="https://images.unsplash.com/photo-1567721537939-868edb6564a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				 />
				{/* <Hello to="Rump" from="plop" /> */}
			</div>
		)
		
	}
}

ReactDOM.render(<App />, document.getElementById('root'));