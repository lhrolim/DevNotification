import React from 'react'
import {VictoryPie} from 'victory'

export default class PieChart1 extends React.Component {
  render() {
    const style = {
      parent: {width: '300px', height: '300px'}
    }
    return <VictoryPie style={style} />
  }
}
