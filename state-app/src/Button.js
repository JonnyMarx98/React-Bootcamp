import React, { Component } from 'react';

class Button extends Component{

    render() {
        return (
            <button onClick={function(){alert("clicked");}}>Click</button>
        )
    }
}

export default Button;