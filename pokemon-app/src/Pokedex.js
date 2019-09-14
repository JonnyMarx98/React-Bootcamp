import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-win">Winning Hand! 🏆 </h1>
        } else {
            title = <h1 className="Pokedex-lose">Losing Hand! 😥 </h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h3>Total EXP: {this.props.exp}</h3>         
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                        id={p.id} 
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    } 
}

export default Pokedex;