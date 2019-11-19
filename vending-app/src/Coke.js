import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class Coke extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <Message>
                    <h2>COCA COLA BAABY</h2>
                </Message>
                
                <img src="https://cdn0.iconfinder.com/data/icons/beverage-element-pack-1/512/can-packaging-04c-512.png"/>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
    
}

export default Coke;