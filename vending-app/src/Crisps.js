import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Crisps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <img src="https://walkers.co.uk/images/default-source/products/walkers-crisps/ready_salted.png?sfvrsn=4"/>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
    
}

export default Crisps;