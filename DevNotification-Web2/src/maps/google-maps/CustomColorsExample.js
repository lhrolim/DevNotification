import React from 'react'
import {withGoogleMap, GoogleMap} from 'react-google-maps'
import fancyMapStyles from './fancyMapStyles.json'

const CustomColorsExample = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{lat: -34.397, lng: 150.644}}
    defaultOptions={{styles: fancyMapStyles}}
  />
))

export default CustomColorsExample
