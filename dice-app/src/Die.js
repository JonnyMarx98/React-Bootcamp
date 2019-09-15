import React, { Component } from 'react';
import './Die.css'

const DICE_ICON = "fas fa-dice-";

class Die extends Component {

    render() {
        // 
        let icon = `${DICE_ICON}${this.props.num}`;
        return (
            <i className={`Die ${icon} ${this.props.rolling && 'Die-heartBeat'}`}></i>
        )
    }

}

export default Die;