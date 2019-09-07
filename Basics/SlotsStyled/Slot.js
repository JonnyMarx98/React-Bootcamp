class Slot extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const win = (s1 === s2) && (s2 === s3);
        const fruitStyle = {
            fontSize: '25px', 
            backgroundColor: 'pink'
        }
        return (
            <div className="Slot">
                <label htmlFor="textInput"></label>
                <p style={fruitStyle}>
                    {s1} {s2} {s3}
                </p>
                <p className={win ? 'Slot-win' : 'Slot-lose'}>
                    {win ? 'Winner!' : 'Loser!'}
                </p>
                {/* {msg} */}
            </div>
        );
    }
}