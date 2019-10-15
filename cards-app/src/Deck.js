import React, { Component } from 'react';
import axios from 'axios';

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
        const cardUrl = `${API_URL}/${this.state.deck.deck_id}/draw/?count=1`
        let cardResponse = await axios.get(cardUrl);
        // get the card image from request
        let card = cardResponse.data.cards[0];
        // add it to array of images and update the state
        // let new_imgs = [...this.state.imgs, cardImg];
        // this.setState({imgs: new_imgs});
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
    }
    

    render(){
        let images = this.state.cards.map(card => (
            <img src={card.img} />
        ))

        return(
            <div>
                <button onClick={this.handleClick}>
                    New Card
                </button>
                {images}
            </div>
        )
    }
}

export default Deck;