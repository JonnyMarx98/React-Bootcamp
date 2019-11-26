import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        alert("LOGGED IN");
        this.props.history.push("/food/fish");
    }

    render(){
        return(
            <div>
                <button onClick={this.handleLogin}>Log In</button>
            </div>
        )
    }
    
}

export default withRouter(Navbar);