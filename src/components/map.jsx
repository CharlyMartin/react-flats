import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker.jsx'

class Map extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     coords: {lat: 48.884211, lng: 2.34689}
  //   }
  // }

  render() {
    const c = this.props.coords;

    return(<GoogleMap defaultCenter={{lat: 48.884211, lng: 2.34689}} defaultZoom={12}>
            {/* lat and lng need to be passed to Marker Component */}
            <Marker lat={c.lat} lng={c.lng} />
          </GoogleMap>
        )
  }
}

export default Map;
