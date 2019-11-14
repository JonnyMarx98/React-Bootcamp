import React, { Component } from 'react';

class Dog extends Component {
    componentDidMount(){
        console.log("DOG MOUNT");
    }
    componentWillUnmount(){
        console.log("dog unmount!");
    }
    render(){
        console.log("Dog render");
        return(
            <div>
                <h1>Dog</h1>
                <h3>name: {this.props.name}</h3>
            </div>
        )
    }
}

export default Dog;