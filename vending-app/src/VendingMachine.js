import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class VeningMachine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){
        return(
            <div>
                <h1>Vending Machine</h1>
                <Message>
                    <h3>Hi I'm a vending machine</h3>
                </Message>
                
                <Message>
                    <h3><Link exact to="/jaffa">Jaffa Cakes</Link></h3>
                    <h3><Link exact to="/coke">Coke</Link></h3>
                    <h3><Link exact to="/crisps">Crisps</Link></h3>
                </Message>
                
                <img src="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=899120-894&recipeName=680"/>
            </div>
        )
    }
}


export default VeningMachine;