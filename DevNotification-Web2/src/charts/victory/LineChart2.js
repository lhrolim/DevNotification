import React from 'react'
import {VictoryChart, VictoryLine} from 'victory'

export default class LineChart1 extends React.Component {
  render() {
    const style = {
      parent: {width: '600px', height: '300px'}
    }
    return (
      <VictoryChart style={style}>
        <VictoryLine y={data => data.x * data.x} />
      </VictoryChart>
    )
  }
}
