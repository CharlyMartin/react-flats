import React, { Component } from 'react';

import Card from './card.jsx'
import FlatList from './flat_list.jsx'
import MapContainer from './map_container.jsx'

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <FlatList/>
        <MapContainer/>
      </div>
      )
  };

}

export default App;
