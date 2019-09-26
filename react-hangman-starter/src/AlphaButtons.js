import React, { Component } from 'react';
import './AlphaButtons.css'

class AlphaButtons extends Component {
    static defaultProps = {
        letters: "abcdefghijklmnopqrstuvwxyz"
    }



    render(){
        return(
            <div className="AlphaButtons">
                alpha
            </div>
        )
    }
}

export default AlphaButtons;