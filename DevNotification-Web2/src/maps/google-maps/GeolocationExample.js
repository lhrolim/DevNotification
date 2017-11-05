import React from 'react'
import {withGoogleMap, GoogleMap, Circle, InfoWindow} from 'react-google-maps'

let canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const geolocation =
  canUseDOM && navigator.geolocation
    ? navigator.geolocation
    : {
        getCurrentPosition(success, failure) {
          failure(`Your browser doesn't support geolocation.`)
        }
      }

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap defaultZoom={13} center={props.center}>
    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={150}
        options={{
          fillColor: `red`,
          fillOpacity: 0.2,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1
        }}
      />
    )}
  </GoogleMap>
))

export default class GeolocationExample extends React.Component {
  state = {
    center: null,
    content: null
    //radius: 6000,
  }

  isUnmounted = false

  componentDidMount() {
    geolocation.getCurrentPosition(
      position => {
        if (this.isUnmounted) {
          return
        }
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          content: `Location found using HTML5.`
        })
      },
      reason => {
        if (this.isUnmounted) {
          return
        }
        this.setState({
          center: {
            lat: 60,
            lng: 105
          },
          content: `Error: The Geolocation service failed (${reason}).`
        })
      }
    )
  }

  componentWillUnmount() {
    this.isUnmounted = true
  }

  render() {
    return (
      <GeolocationExampleGoogleMap
        containerElement={<div style={{height: `300px`}} />}
        mapElement={<div style={{height: `300px`}} />}
        center={this.state.center}
        content={this.state.content}
        //radius={this.state.radius}
      />
    )
  }
}
