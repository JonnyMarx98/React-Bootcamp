import React, { Component } from 'react';

class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {score:0};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    singleKill(){
        // Kill
        this.setState({score: this.state.score + 1});
    }

    kill = prevState => ({score: prevState.score + 1});

    tripleKill(){
        // Kill 3 baddies
        this.setState(this.kill);
        this.setState(this.kill);
        this.setState(this.kill);
    }

    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>KILL</button>
                <button onClick={this.tripleKill}>triple KILL!</button>
            </div>
        )
    }

}

export default ScoreKeeper;