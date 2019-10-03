import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt){
        this.props.removeBox(this.props.id);
    }

    render(){
        let boxStyle = {
            backgroundColor: this.props.color,
            width: `${this.props.width}em`,
            height: `${this.props.height}em`
        }
        return(
            <div style={boxStyle} onClick={this.handleRemove}>
            </div>
        )
    }
}

export default Box;