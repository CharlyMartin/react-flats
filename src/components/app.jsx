import React, { Component } from 'react';

import Flat from './flat.jsx'
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'
import Map from './map.jsx'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: {},
      selected: "flat1"
    }

    this.previous = "";
  }

  updateCoords = (obj) => {
    this.setState({coords: {lat: Number(obj.lat),lng: Number(obj.lng)}});
  }

  updateActive = (el) => {
    // console.log(this.previous);
    if (this.previous) {
      this.previous.classList.remove("active");
    }
    el.classList.add("active");
    this.previous = el;
    // previous.classList.remove("active");
    // el.classList.add("active");
  }

  handleClick = (event) => {
    // console.log(event.currentTarget);
    // The element on which onClick is attached (=> one on each flat card)
    // this.getCoords(event.currentTarget.dataset);
    event.preventDefault();
    this.updateCoords(event.currentTarget.dataset);
    this.updateActive(event.currentTarget);
  }

  render() {
    return (
      <div className="main-container">
        <FlatList flats={flats} clickFunction={this.handleClick}/>
        <div className="map-container">
          <Map coords={this.state.coords}/>
        </div>
      </div>
    )
  };

}

export default App;
