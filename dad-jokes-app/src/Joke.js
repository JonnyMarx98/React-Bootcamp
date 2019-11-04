import React, { Component } from 'react';
import './Joke.css'

class Joke extends Component {

    render(){
        return(
            <div className='Joke'>
                <div className='Joke-btns'>
                    {/* <i class="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i> */}
                    <i className="em em---1" onClick={this.props.upvote}/>
                    <span className='Joke-votes'>{this.props.votes}</span>
                    <i className="em em--1" onClick={this.props.downvote}/>
                </div>
                <div className='Joke-text'>
                    {this.props.text}
                </div>
                <div className='Joke-emoji'>
                    <i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
                </div>
            </div>
        )
    }
}

export default Joke;