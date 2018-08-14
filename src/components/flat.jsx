import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);

    this.active = this.props.id;
  }

  initActive = () => {
    const newClass = (this.active === "flat1" ? "active" : "");
    this.active = "";
    return newClass;
  }

  render() {
    const imageUrl = `https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/${this.props.id}.jpg`
    const styles = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    }

    return (<div className={"card " + this.initActive()} style={styles} onClick={this.props.clickFunction} data-lat={this.props.lat} data-lng={this.props.lng}>
              <div className="card-category">{this.props.price + " " + this.props.currency}</div>
              <div className="card-description">
                <h2>{this.props.description}</h2>
              </div>
              <a className="card-link" href="#"></a>
            </div>
            );
  };
}

export default Flat;
