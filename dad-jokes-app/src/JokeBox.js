import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';

class JokeBox extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props)
    
        this.state = {
            jokes: []
        }
        this.getNewJoke = this.getNewJoke.bind(this);
    }
    
    async componentDidMount(){
        let jokes = []
        while(jokes.length <= this.props.numJokesToGet){
            const url = 'https://icanhazdadjoke.com/';
            const config = {
                headers: {
                Accept: 'application/json',
                }
            };
            let jokeRes = await axios.get(url, config);
            jokes.push(jokeRes.data.joke);
        }
        this.setState({jokes: jokes});
    }

    async getNewJoke(){
        // Load jokes
        const url = 'https://icanhazdadjoke.com/';
        const config = {
            headers: {
              Accept: 'application/json',
            }
          };
        let jokeRes = await axios.get(url, config);
        return(jokeRes.data.joke);
    }

    render(){
        let jokes = this.state.jokes.map(joke => (
            <li>{joke}</li>
        ))
        return(
            <div>
                <h1>Dad Jokes 🤣</h1>
                <button>New Jokes</button>
                <ul>
                    {jokes}
                </ul> 
            </div>
        )
    }
}

export default JokeBox;