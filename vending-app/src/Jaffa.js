import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class Jaffa extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return(
            <div>
                <Message>
                    <h1>Jaffa Cakes!</h1>
                </Message>
                <Message>
                   <h2>Jaffa Cakes! EVERYWHERE OOO YEAH</h2> 
                </Message>
                
                <img src="https://digitalcontent.api.tesco.com/v1/media/ghs/snapshotimagehandler_241440089/2cfd32dd0361e812a7e93cda89287dcf9b651c8b66f2fdaaceacc1074e417c27/05000168202792/snapshotimagehandler_241440089.jpeg?h=540&w=540"/>
                <Link exact to="/">Go Back</Link>
            </div>
        )
    }
    
}

export default Jaffa;