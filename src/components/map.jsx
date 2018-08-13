import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Marker from './marker.jsx'

class Map extends Component {

  render() {
    const coords = {lat: 48.884211, lng: 2.34689};

    return(<GoogleMap defaultCenter={coords}
              defaultZoom={14}>

            {/* lat and lng need to be passed to Marker Component */}
            <Marker lat={coords.lat} lng={coords.lng} text={'Kreyser Avrora'} />
          </GoogleMap>)
  }
}

export default Map;
