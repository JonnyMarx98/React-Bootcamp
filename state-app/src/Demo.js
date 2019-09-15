import React, { Component } from 'react';

class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            something: 10
        };
    };
    render() {
        return (
            <div>
                <h1>DEMO</h1>
            </div>
        )
    }
}

export default Demo;