import React, { Component } from 'react'
import Coin from './Coin';

const headsImg = "https://tinyurl.com/react-coin-heads-jpg";
const tailsImg = "https://tinyurl.com/react-coin-tails-jpg";


class CoinFlip extends Component{
    constructor(props){
        super(props);
        this.state = {
            face: 0,
            headCount: 0,
            tailCount: 0,
            flipCount:0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flip(){
        // Random num between 1 and 0
        let rand = Math.round(Math.random());
        this.setState(st => {
            return {
                face: rand,
                headCount: st.headCount + (rand ? 1 : 0),
                tailCount: st.tailCount + (rand ? 0 : 1),
                flipCount: st.flipCount + 1
            }
        });
    }

    handleClick(){
        this.flip();
    }
    
    render(){
        return(
            <div>
                <h1>Flip</h1>
                <Coin
                img={this.state.face ? headsImg : tailsImg}
                />
                <button onClick={this.handleClick}>Flip Coin</button>
                <div>
                    <ul>
                        <li>{`Flips: ${this.state.flipCount}`}</li>
                        <li>{`Heads: ${this.state.headCount}`}</li>
                        <li>{`Tails: ${this.state.tailCount}`}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CoinFlip;