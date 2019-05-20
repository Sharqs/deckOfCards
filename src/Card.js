import React, { Component } from 'react';

class Card extends Component {
  render(){
    return <div> <img src={this.props.image} alt='error' /> </div>
  }
}
export default Card;