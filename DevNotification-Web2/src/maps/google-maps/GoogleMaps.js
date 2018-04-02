import React, {Component} from 'react'
import Widget from '../../elements/Widget'
/*
https://tomchentw.github.io/react-google-maps/basics/simple-map
*/
import BasicGoogleMapExample from './BasicGoogleMapExample'
import GeolocationExample from './GeolocationExample'
import CustomColorsExample from './CustomColorsExample'
import TrafficLayerExample from './TrafficLayerExample'
import StreetviewExample from './StreetviewExample'
//import '../css/maps/google-maps.css'

class GoogleMaps extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-xl-6">
          <Widget
            title="Basic map"
            description="Use the BasicGoogleMapExample component to show a basic google map">
            <BasicGoogleMapExample
              containerElement={<div style={{height: `300px`}} />}
              mapElement={<div style={{height: `300px`}} />}
            />
          </Widget>
        </div>
        <div className="col-12 col-xl-6">
          <Widget
            title="Geolocation example"
            description="Use the GeolocationExample component to show a map that captures your location">
            <GeolocationExample />
          </Widget>
        </div>
        <div className="col-12 col-xl-6">
          <Widget
            title="Map with custom colors"
            description="Use the CustomColorsExample component to show a map with custom colors">
            <CustomColorsExample
              containerElement={<div style={{height: `300px`}} />}
              mapElement={<div style={{height: `300px`}} />}
            />
          </Widget>
        </div>
        <div className="col-12 col-xl-6">
          <Widget
            title="Map with traffic layer"
            description="Use the TrafficLayerExample component to show a map with a traffic layer overlay">
            <TrafficLayerExample
              containerElement={<div style={{height: `300px`}} />}
              mapElement={<div style={{height: `300px`}} />}
            />
          </Widget>
        </div>
        <div className="col-12 col-xl-6">
          <Widget
            title="Streetview panorama"
            description="Use the StreetviewExample component to show a streetview panorama">
            <StreetviewExample
              containerElement={<div style={{height: `300px`}} />}
              mapElement={<div style={{height: `300px`}} />}
            />
          </Widget>
        </div>
      </div>
    )
  }
}
export default GoogleMaps
