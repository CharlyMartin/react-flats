import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  render() {
    return(<GoogleMapReact
              defaultCenter={{lat: 48.884211, lng: 2.34689}}
              defaultZoom={12} />)
  }
}

export default Map;
