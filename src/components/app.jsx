import React, { Component } from 'react';

import FlatList from './flat_list';
import flats from '../../data/flats';
import Map from './map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      current: flats[0],
    };
  }

  center = () => {
    return {
      lat: this.state.current.lat,
      lng: this.state.current.lng
    };
  }

  updateSelected = (index) => {
    this.setState({ current: flats[index] });
  }

  // updateActive = (el) => {
  //   if (this.state.previous) {
  //     this.state.previous.classList.remove("active");
  //   }

  //   el.classList.add("active");
  //   this.state.previous = el;
  // }

  // updateSelectedFlat = (event) => {
  //   console.log(event.currentTarget);
  //   The element on which onClick is attached (=> one on each flat card)
  //   this.getCoords(event.currentTarget.dataset);
  //   event.preventDefault();
  //   this.updateCoords(event.currentTarget.dataset);
  //   this.updateActive(event.currentTarget);
  // }

  render() {
    return (
      <div className="main-container">
        <FlatList
          flats={this.state.flats}
          selected={this.state.current}
          updateFunction={this.updateSelected}
        />

        <div className="map-container">
          <Map coords={this.center()} />
        </div>
      </div>
    );
  }
}

export default App;
