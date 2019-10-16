import React, { Component } from 'react';
import './Card.css'

class Card extends Component{
    constructor(props) {
        super(props);
        let angle = Math.random() * 45 - 22.5;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    

    render(){
        return(
            <img
            className="Card"
            style={{transform: this._transform}}
            src={this.props.image}
            alt={this.props.alt}
            />
        )
    }
}

export default Card;