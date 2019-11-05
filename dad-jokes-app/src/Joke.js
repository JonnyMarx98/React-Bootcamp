import React, { Component } from 'react';
import './Joke.css'

class Joke extends Component {

    getColor(){
        let {votes} = this.props;
        if(votes >= 15){
            return "#4CAF50";
        } else if (votes >= 12){
            return "#8BC34A";
        } else if (votes >= 9){
            return "#cddc39";
        } else if (votes >= 6){
            return "#ffeb3b";
        } else if (votes >= 3){
            return "#ffc107";
        } else if (votes >= 0){
            return "#ff9800";
        } else {
            return "#f44336";
        }
    }

    getEmoji(){
        let {votes} = this.props;
        if(votes >= 15){
            return "em em-rolling_on_the_floor_laughing";
        } else if (votes >= 12){
            return "em em-laughing";
        } else if (votes >= 9){
            return "em em-smiley";
        } else if (votes >= 6){
            return "em em-slightly_smiling_face";
        } else if (votes >= 3){
            return "em em-neutral_face";
        } else if (votes >= 0){
            return "em em-confused";
        } else {
            return "em em-disappointed";
        }
    }

    render(){
        return(
            <div className='Joke'>
                <div className='Joke-btns'>
                    {/* <i class="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i> */}
                    <i className="em em---1" onClick={this.props.upvote}/>
                    <span className='Joke-votes' style={{ borderColor: this.getColor()}}>
                        {this.props.votes}
                    </span>
                    <i className="em em--1" onClick={this.props.downvote}/>
                </div>
                <div className='Joke-text'>
                    {this.props.text}
                </div>
                <div className='Joke-emoji'>
                    <i class={this.getEmoji()} aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
                </div>
            </div>
        )
    }
}

export default Joke;