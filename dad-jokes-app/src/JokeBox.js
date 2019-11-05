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
            jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
            loading: false
        }

        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        console.log(this.seenJokes)
        this.getNewJokes = this.getNewJokes.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        if(this.state.jokes.length === 0){
            this.setState({loading: true}, this.getNewJokes);
        }
        
    }

    async getNewJokes(){
        try {
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
            if(!this.seenJokes.has(jokeRes.data.joke)){
                jokes.push({id: uuid(), text: jokeRes.data.joke, votes: 0});
            } else {
                console.log("Duplicate joke found");
                console.log(jokeRes.data.joke);
            }
        }
        this.setState(st => ({
            jokes: [...st.jokes, ...jokes],
            loading: false
        }),
        () => window.localStorage.setItem(
            "jokes", JSON.stringify(this.state.jokes)
            )
        );
        } catch(e){
            alert(e);
            this.setState({loading: false})
        }
    }

    handleClick(){
        this.setState({loading: true}, this.getNewJokes);
    }

    handleVote(id, delta){
        this.setState(st => ({
            jokes: st.jokes.map(j => 
                j.id === id ? {...j, votes: j.votes + delta} : j 
                )
        }),
        () => window.localStorage.setItem(
            "jokes", JSON.stringify(this.state.jokes)
            )
        );
    }

    render(){
        let sortedJokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
        let jokes = sortedJokes.map(j => (
            <Joke
            key={j.id}
            text={j.text}
            votes={j.votes}
            upvote={() => this.handleVote(j.id, 1)}
            downvote={() => this.handleVote(j.id, -1)}
            />
        ))

        if(this.state.loading) {
            return (
                <div className="JokeBox-spinner">
                    <i className="far fa-8x fa-laugh fa-spin"/>
                    <h1 className='JokeBox-title'>Loading hilarious jokes...</h1>
                </div>
            )
        }
        return(
            <div className='JokeBox'>
                <div className='JokeBox-sidebar'>
                    <h1 className='JokeBox-title'>
                        <span>Dad</span> Jokes
                    </h1>
                    <button onClick={this.handleClick} className='JokeBox-getmore'>More Jokes</button>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'></img>
                </div>
                <div className='JokeBox-jokes'>
                    {jokes}
                </div>
                
            </div>
        )
    }
}

export default JokeBox;