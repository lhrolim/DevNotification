import React from 'react'
import {withGoogleMap, GoogleMap, TrafficLayer} from 'react-google-maps'

const TrafficLayerExample = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: 41.876, lng: -87.624}}>
    <TrafficLayer autoUpdate />
  </GoogleMap>
))

export default TrafficLayerExample
