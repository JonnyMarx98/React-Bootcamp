class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
				to="Ringo" 
				from="paul"
				
				 />
				<Hello 
				to="Ringod"
				bangs={15}
				 />
				{/* <Hello to="Rump" from="plop" /> */}
			</div>
		)
		
	}
}

ReactDOM.render(<App />, document.getElementById('root'));