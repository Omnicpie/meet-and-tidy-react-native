import React from 'react';
import MapView from 'react-native-maps';
import Events from '../assets/stylesheets/Events';

export default function PossibleMapView({ region }) {
  return (
    <MapView
      style={Events.map}
      region={region}
      // onRegionChange={(region) => {
      //   console.warn(region);
      //   onChangeLocation(region);
      // }}
    />
  );
}
