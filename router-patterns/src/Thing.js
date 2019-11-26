import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Thing extends Component {

    render(){
        const name = this.props.match.params.name;
        if (/\d/.test(name)) this.props.history.push("/nofound")
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return(
            <div className="Thing">
                {/\d/.test(name) ? (
                    <Redirect to="/notfound" />
                ) : (
                    <div>
                        <h1>I love {name}</h1>
                        <img src={url}/>
                    </div>
                )}
                
            </div>
        )
    }
}

export default Thing;