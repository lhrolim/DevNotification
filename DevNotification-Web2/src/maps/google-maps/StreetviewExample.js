import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView
} from 'react-google-maps'

const coordinates = {lat: 49.2853171, lng: -123.1119202}

const STYLES = {
  overlayView: {
    background: `red`,
    color: `white`,
    padding: 5,
    borderRadius: `50%`,
    display: `none`
  }
}

function getPixelPositionOffset(width, height) {
  return {x: -(width / 2), y: -(height / 2)}
}

const StreetviewExample = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={coordinates}>
    <StreetViewPanorama defaultPosition={coordinates} visible>
      <OverlayView
        position={{lat: 49.28590291211115, lng: -123.11248166065218}}
        mapPaneName={OverlayView.OVERLAY_LAYER}
        getPixelPositionOffset={getPixelPositionOffset}>
        <div style={STYLES.overlayView}>OverlayView</div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
))

export default StreetviewExample
