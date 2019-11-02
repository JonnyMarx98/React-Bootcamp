import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import './JokeBox.css';

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
            <div className='JokeBox'>
                <div className='JokeBox-sidebar'>
                    <h1 className='JokeBox-title'>
                        <span>Dad</span> Jokes 🤣
                    </h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'></img>
                </div>
                
                {/* <button>New Jokes</button> */}
                <div className='JokeBox-jokes'>
                    <ul>
                        {jokes}
                    </ul> 
                </div>
                
            </div>
        )
    }
}

export default JokeBox;