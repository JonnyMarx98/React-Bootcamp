import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import './JokeBox.css';
import uuid from 'uuid/v4';

class JokeBox extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props) {
        super(props)
    
        this.state = {
            jokes: []
        }
        this.getNewJokes = this.getNewJokes.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }
    
    async componentDidMount(){
        this.getNewJokes();
    }

    async getNewJokes(){
        // Load jokes
        let jokes = [];
        while(jokes.length <= this.props.numJokesToGet){
            const url = 'https://icanhazdadjoke.com/';
            const config = {
                headers: {
                Accept: 'application/json',
                }
            };
            let jokeRes = await axios.get(url, config);
            jokes.push({id: uuid(), text: jokeRes.data.joke, votes: 0});
        }
        this.setState(st => ({
            jokes: [...st.jokes, ...jokes]
        }))
    }

    handleVote(id, delta){
        this.setState(st => ({
            jokes: st.jokes.map(j => 
                j.id === id ? {...j, votes: j.votes + delta} : j 
                )
        }))
    }

    render(){
        let jokes = this.state.jokes.map(j => (
            <Joke
            key={j.id}
            text={j.text}
            votes={j.votes}
            upvote={() => this.handleVote(j.id, 1)}
            downvote={() => this.handleVote(j.id, -1)}
            />
        ))
        return(
            <div className='JokeBox'>
                <div className='JokeBox-sidebar'>
                    <h1 className='JokeBox-title'>
                        <span>Dad</span> Jokes 🤣
                    </h1>
                    <button onClick={this.getNewJokes}>New Jokes</button>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'></img>
                </div>
                
                {/* <button>New Jokes</button> */}
                <div className='JokeBox-jokes'>
                    {jokes}
                </div>
                
            </div>
        )
    }
}

export default JokeBox;