import React, { Component } from 'react';
import './LotoBall.css'

class LotoBall extends Component {
    render(){
        return(
            <div className='LotoBall'>
                {this.props.num}
            </div>
        )
    }
}

export default LotoBall;