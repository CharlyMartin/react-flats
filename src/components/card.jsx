import React, { Component } from 'react';

class Card extends Component {

  render() {
    console.log("Card rendered");
    const flat = "flat3";
    const imageUrl = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/${flat}.jpg`

    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    }


    return (<div className="card" style={styles}>
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
