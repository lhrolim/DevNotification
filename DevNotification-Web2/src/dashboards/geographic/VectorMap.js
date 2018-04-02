import React from 'react'
import {connect} from 'react-redux'
import {darken} from '../../functions'
import {compose} from 'recompose'
import Datamap from 'react-datamaps'

const DefaultMap = ({defaultFill, altFill}) => {
  let fills = {
    defaultFill: defaultFill
  }
  let geographyConfig = {
    borderWidth: 1,
    borderOpacity: 1,
    borderColor: altFill,
    highlightOnHover: true,
    highlightFillColor: altFill,
    highlightBorderColor: altFill,
    highlightBorderWidth: 1,
    highlightBorderOpacity: 1
  }
  return <Datamap responsive fills={fills} geographyConfig={geographyConfig} />
}

const VectorMap = compose(
  connect(state => {
    let backgroundColors = {...state.backgroundColors}
    let backgroundColor = backgroundColors['light']
    let defaultFill = darken(backgroundColor, 5)
    let altFill = darken(backgroundColor, 15)
    return {
      defaultFill: defaultFill,
      altFill: altFill
    }
  })
)(DefaultMap)

export default VectorMap
