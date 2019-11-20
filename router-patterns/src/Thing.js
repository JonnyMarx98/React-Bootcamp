import React, { Component } from 'react';

class Thing extends Component {

    render(){
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return(
            <div className="Thing">
                <h1>I love {name}</h1>
                <img src={url}/>
            </div>
        )
    }
}

export default Thing;