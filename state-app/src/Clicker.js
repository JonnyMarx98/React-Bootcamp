import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            num: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let rand = Math.floor(Math.random()*this.props.maxNum) + 1;
        this.setState({num: rand})
    }

    render() {
        let win = false;
        if(this.state.num === 7){
            win = true;
        }

        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {
                    this.state.num === 7 
                    ? <h2>WINNER!</h2>
                    : <button onClick={this.handleClick}>New Number</button>
                }
                
            </div>
        );
    }

}
export default Clicker;