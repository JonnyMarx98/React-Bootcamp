import React, { Component } from 'react';

class Game extends Component {
    state = {
        score: 100,
        gameOver: false
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         score: 0,
    //         gameOver: false
    //     }
    // }
    render(){
        return (
            <div>
                <h1>Your score is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;
