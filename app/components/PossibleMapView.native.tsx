import React, { ReactElement } from 'react'
import MapView from 'react-native-maps'
import Events from '../assets/stylesheets/Events'

type PossibleMapViewProps = {
  region: any;
};

export default function PossibleMapView ({ region }: PossibleMapViewProps): ReactElement {
  return (
    <MapView
      style={Events.map}
      region={region}
      // onRegionChange={(region) => {
      //   console.warn(region);
      //   onChangeLocation(region);
      // }}
    />
  )
}
