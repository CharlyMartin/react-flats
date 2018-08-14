import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';

const Map = (props) => {
  return (
    <GoogleMap defaultCenter={props.coords} defaultZoom={12}>
      {/* lat and lng need to be passed to Marker Component */}
      <Marker lat={props.coords.lat} lng={props.coords.lng} />
    </GoogleMap>
  );
};

export default Map;
