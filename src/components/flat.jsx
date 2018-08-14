import React, { Component } from 'react';


class Flat extends Component {
  classes = () => {
    return this.props.selected ? "card active" : "card";
  }

  handleClick = (event) => {
    /* The click happens on the Map level but the function is handled at the App level,
    where the the unpdate function has access to the flats object with coords.
    */
    event.preventDefault();
    this.props.updateFunction(this.props.index);
  }

  render() {
    const imageUrl = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/${this.props.flat.id}.jpg`;
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    };

    return (
      <div className={this.classes()} style={styles} role="link" onClick={this.handleClick}>
        <div className="card-category">{`${this.props.flat.price} ${this.props.flat.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <span className="card-link" />
      </div>
    );
  }
}

export default Flat;
