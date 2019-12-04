import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
require('dotenv').config()

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
 
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 39.736335,
          lng: -104.991990
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);