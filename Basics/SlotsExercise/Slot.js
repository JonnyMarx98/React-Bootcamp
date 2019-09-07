class Slot extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        const win = (s1 === s2) && (s2 === s3);
        // let msg;
        // if(s1 === s2 &&
        //     s2 === s3){
        //     msg = <p>You win!</p>
        // } else {
        //     msg = <p>You loose!</p>
        // }
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{win ? 'Winner!' : 'Loser!'}</p>
                {/* {msg} */}
            </div>
        );
    }
}