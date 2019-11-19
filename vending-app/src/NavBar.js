import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component{

    render(){
        return(
            <div className="NavBar">
                <NavLink exact activeClassName="NavBar-active" to="/">Machine</NavLink>
                <NavLink exact activeClassName="NavBar-active" to="/jaffa">Jaffa Cakes</NavLink>
                <NavLink exact activeClassName="NavBar-active" to="/crisps">Crisps</NavLink>
                <NavLink exact activeClassName="NavBar-active" to="/coke">Coke</NavLink>
            </div>
        )
    }
    
}

export default NavBar;