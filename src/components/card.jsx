import React, { Component } from 'react';

class Card extends Component {

  render() {
    console.log("Card rendered")
    const spacing = 4;
    const flat = 'flat3';
    const backgroundImg = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/${flat}.jpg`


    return (<div className="card" style={backgroundImage: `backgroundImg`}>
              <div className="card-category">150 EUR</div>
              <div className="card-description">
                <h2>Super 60m2 in trendy neighborhood!</h2>
              </div>
              <a className="card-link" href="#"></a>
            </div>
            );
  };
}

export default Card;
