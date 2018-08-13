import React, { Component } from 'react';

import Card from './card.jsx'
import FlatList from './flat_list.jsx'
import MapContainer from './map_container.jsx'

import flats from '../../data/flats.js'

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <FlatList flats={flats}/>
        <MapContainer/>
      </div>
      )
  };

}

export default App;
