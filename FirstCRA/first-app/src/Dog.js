import React, { Component } from 'react';
import './Dog.css'
import dogPic from './images/dog.jpg';

class Dog extends Component {
    render(){
        return (
            <div className="Dog">
                <h1>DOG!</h1>
                <img className="Dog-img" src={dogPic}></img>
            </div>
        )
    }
}

export default Dog;