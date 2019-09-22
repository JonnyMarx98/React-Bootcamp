import React, { Component } from 'react'
import Coin from './Coin';

class CoinFlip extends Component{
    constructor(props){
        super(props);
        this.state = {
            face: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flip(){
        this.setState(
            st => face: Math.floor(Math.random()))
        
    }

    handleClick(){
        this.flip();
    }
    
    render(){
        return(
            <div>
                <h1>Flip</h1>
                <Coin/>
                <button onClick={this.handleClick}>Flip Coin</button>
            </div>
        )
    }
}

export default CoinFlip;