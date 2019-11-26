import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt){
        this.setState({query: evt.target.value});
    }

    handleClick(){
        alert("Saved food to db!");
        this.props.history.push(`/food/${this.state.query}`);
    }
    

    render() {
        return (
            <div>
                <h1>Search</h1>
                <input
                 type="text" 
                 placeholder="search for something"
                 value={this.state.query}
                 onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`}>Go</Link>
                <button onClick={this.handleClick}>Save Food</button>
            </div>
        )
    }
}

export default Search;