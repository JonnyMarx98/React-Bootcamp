import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css'

const API_URL = "https://deckofcardsapi.com/api/deck"

class Deck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {deck: null, cards: []}

        this.handleClick = this.handleClick.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
    }

    async componentDidMount(){
        let deck = await axios.get(`${API_URL}/new/shuffle/?deck_count=1`);
        // console.log(deck.data.deck_id);
        this.setState({deck: deck.data});
    }

    handleClick(){
        this.addNewCard();
    }

    async addNewCard(){
        // Make request for new card using deck_id
        let deck_id = this.state.deck.deck_id;
        try {
            const cardUrl = `${API_URL}/${deck_id}/draw/?count=1`
            let cardResponse = await axios.get(cardUrl);
            if(!cardResponse.data.success) {
                throw new Error("No card remaining!")
            }
            // get the card image from request
            let card = cardResponse.data.cards[0];
            // add it to array of cards and update the state
            this.setState(st => ({
                cards: [
                    ...st.cards,
                    {
                        id: card.code,
                        img: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch (err) {
            alert(err)
        }
    }
    

    render(){
        const cards = this.state.cards.map(card => (
            <Card key={card.id} image={card.img} alt={card.name}/>
        ))

        return(
            <div className="Deck">
                <h1 className="Deck-title">◆ Card Dealer ◆</h1>
                <h2 className="Deck-title sub">A simple card dealer made with React</h2>
                <button className="Deck-btn" onClick={this.handleClick}>
                    New Card
                </button>
                <div className="Deck-cards">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck;