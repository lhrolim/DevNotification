import React from 'react'
import {withGoogleMap, GoogleMap} from 'react-google-maps'

const BasicGoogleMapExample = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}} />
))

export default BasicGoogleMapExample
