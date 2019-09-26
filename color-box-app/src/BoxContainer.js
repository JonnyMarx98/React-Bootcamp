import React, { Component } from 'react';
import Box from './Box';
import {randomColor, colors} from './helper.js'
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes: 77
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box color={randomColor(colors)}/>
        )
        return(
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;