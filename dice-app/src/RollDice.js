import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

var numberConversion = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
}

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            rolling: false
        }
        this.rollDice = this.rollDice.bind(this);
        this.rollDice();
    }

    numToWord = (num) => {
        return numberConversion[num];
    }

    rollDice(e){
        // generate 2 new rolls
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        // Set state 
        this.setState({num1: rand1, num2: rand2, rolling: true});

        // wait 1 sec then set roll to false
        setTimeout(()=>{
            this.setState({rolling: false});
        }, 1000)
    }

    render(){
        return(
            <div className="RollDice">
                <div className="RollDice-die">
                    <Die 
                    num={this.numToWord(this.state.num1)}
                    rolling={this.state.rolling}
                    />
                    <Die 
                    num={this.numToWord(this.state.num2)}
                    rolling={this.state.rolling}
                    />  
                </div>
                
                <button onClick={this.rollDice} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
            
        )
    }
}

export default RollDice;