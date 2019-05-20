import React, { Component } from 'react';
import axios from 'axios';
import Deck from './Deck';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new: true,
      deckId: null
    }
    this.toggleNew = this.toggleNew.bind(this);
  }

  async toggleNew() {
    let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    this.setState({ new: false, deckId: deck.data.deck_id });
  }

  render() {
    let display = <button onClick={this.toggleNew}>New Deck</button>;
 
    if (!this.state.new) {
      display = <Deck deckId={this.state.deckId} />
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }

}

export default App;
