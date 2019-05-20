import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';
import uuid from 'uuidv4';


class Deck extends Component {

  constructor(props){
    super(props)
    this.state = {
      draws: []
    }
    this.drawCard = this.drawCard.bind(this);
  }

  async drawCard(){
    let cardres = await axios.get(`https://deckofcardsapi.com/api/deck/${this.props.deckId}/draw/?count=1`);
    let card = cardres.data.cards[0];
    card['id'] = uuid();
    let draws = [...this.state.draws, card];
    this.setState((st) => ({draws}));
  }

  render(){
    let result = this.state.draws.map((card) => <Card {...card} key={card.id} />)

    return (
      <div> 
        <button onClick={this.drawCard}>Draw a Card</button>
        {result} 
      </div>)
      
  }
}

export default Deck;