import React, { Component } from 'react';

class BoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: '',
            height: '',
            width: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox(this.state);
        // Clear form by reseting state
        this.setState({
            color: '',
            height: '',
            width: ''
        });
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='color'>Color: </label>
                        <input
                        id='color'
                        name='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                        />
                    <label htmlFor='height'>Height: </label>
                        <input
                        id='height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                        />
                    <label htmlFor='width'>Width: </label>
                        <input
                        id='width'
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                        />
                    <button>Add Box!!</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;