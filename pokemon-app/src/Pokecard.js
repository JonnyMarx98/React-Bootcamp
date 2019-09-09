import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    static defaultProps = {
        id: 4, 
        name: 'Charmander', 
        type: 'fire', 
        base_experience: 62
    }
    render() {
        const props = this.props;
        let imgSrc = `${POKE_API}${props.id}.png`
        return (
            <div className="Pokecard">
                <h1>{props.name}</h1>
                <img src={imgSrc} alt={props.name}></img>
                <div>{props.type}</div>
                <div>{props.base_experience}</div>
            </div>
        )
    } 
}

export default Pokecard;