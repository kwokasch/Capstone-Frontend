import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
require('dotenv').config()

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
 
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    const location = ev.latLng;
    this.props.setLatLong(location.lat(), location.lng())
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);

  };

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
        onClick={this.handleMapClick}
      >
        {this.state.locations.map((location, i) => {
            return (
              <Marker
                key={i}
                position={{ lat: location.lat(), lng: location.lng() }}
              />
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);