import React, { Component } from 'react';

import Card from './card.jsx'
import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'
import Map from './map.jsx'

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <FlatList flats={flats}/>
        <div className="map-container">
          <Map/>
        </div>
      </div>
      )
  };

}

export default App;
