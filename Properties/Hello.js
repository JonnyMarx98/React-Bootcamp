class Hello extends React.Component {
	render() {
		const props = this.props;
		let bangs = "!".repeat(props.bangs);
		return (
			<div>
				<p>To {props.to} Hello there! from {props.from}{bangs}</p>
				<img src={this.props.img}></img>
			</div>
		);
	}
}

ReactDOM.render(<Hello/>, document.getElementById('root'));