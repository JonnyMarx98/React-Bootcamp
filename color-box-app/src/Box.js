import React, { Component } from 'react';
import './Box.css';
import {randomColor, colors} from './helper.js'


class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    changeColor(){
        let newColor;
        do {
            newColor = randomColor(colors);
        } while(newColor === this.state.color)
        this.setState({color: newColor});
    }

    handleClick(e){
        this.changeColor();
    }

    render(){
        return(
            <div className="Box"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>
            </div>
        )
        

    }
}

export default Box;