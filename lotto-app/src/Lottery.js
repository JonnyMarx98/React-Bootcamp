import React, { Component } from 'react';
import LotoBall from './LotoBall';
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Loto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props);
        this.state = {
            balls: Array.from({length: this.props.numBalls})
        };
        this.handleClick = this.handleClick.bind(this);
    }

    generate(){
        // gen nums
        this.setState(st => ({
            balls: st.balls.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
        
    }
    handleClick(){
        this.generate();
    }

    render(){
        return(
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.balls.map(n => <LotoBall num={n} />)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        )
    }

}

export default Lottery; 