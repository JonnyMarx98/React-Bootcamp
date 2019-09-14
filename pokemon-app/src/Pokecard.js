import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const POKE_API_2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const POKE_WIKI = 'https://pokemon.fandom.com/wiki/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number);

class Pokecard extends Component {
    render() {
        const props = this.props;
        let imgSrc = `${POKE_API_2}${padToThree(props.id)}.png`;
        let wikiLink = `${POKE_WIKI}${props.name}`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <a href={wikiLink}>
                    <div className="Pokecard-img">
                        <img src={imgSrc} alt={props.name}></img>
                    </div>
                </a>
                
                <div className="Pokecard-data">{props.type}</div>
                <div className="Pokecard-data">{props.base_experience}</div>
            </div>
        )
    } 
}

export default Pokecard;