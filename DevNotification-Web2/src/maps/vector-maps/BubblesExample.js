import React from 'react'
import {lighten, darken} from '../../functions'
import Datamap from 'react-datamaps'

const BubblesExample = ({colors, backgroundColor}) => (
  <Datamap
    geographyConfig={{
      borderWidth: 1,
      borderOpacity: 1,
      borderColor: darken(backgroundColor, 15),
      popupOnHover: false,
      highlightOnHover: false
    }}
    fills={{
      defaultFill: lighten(colors.success, 20),
      USA: colors.danger,
      BRA: colors.warning,
      RUS: colors.info
    }}
    bubbles={[
      {
        name: 'Not a bomb, but centered on Brazil',
        radius: 23,
        centered: 'BRA',
        country: 'USA',
        yeild: 0,
        fillKey: 'BRA',
        date: '1954-03-01'
      },
      {
        name: 'Castle Bravo',
        radius: 25,
        yeild: 15000,
        country: 'USA',
        significance:
          'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
        fillKey: 'USA',
        date: '1954-03-01',
        latitude: 11.415,
        longitude: 165.1619
      },
      {
        name: 'Tsar Bomba',
        radius: 70,
        yeild: 50000,
        country: 'USSR',
        fillKey: 'RUS',
        significance:
          'Largest thermonuclear weapon ever tested-scaled down from its initial 100Mt design by 50%',
        date: '1961-10-31',
        latitude: 73.482,
        longitude: 54.5854
      }
    ]}
    bubbleOptions={{
      popupTemplate: (geo, data) =>
        `<div class="hoverinfo">Yield: ${data.yeild}\nExploded on ${data.date} by the ${data.country}`
    }}
  />
)

export default BubblesExample
