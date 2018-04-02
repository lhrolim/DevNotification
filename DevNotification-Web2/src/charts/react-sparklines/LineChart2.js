import React, {Component} from 'react'
import {
  Sparklines,
  SparklinesBars,
  SparklinesLine,
  SparklinesCurve,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesSpots
} from 'react-sparklines'

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w,
    z

  return (function() {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0
        x2 = 2.0 * Math.random() - 1.0
        w = x1 * x1 + x2 * x2
      } while (w >= 1.0)

      w = Math.sqrt(-2.0 * Math.log(w) / w)
      return x1 * w
    } else {
      return x2 * w
    }
  })()
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom)
}

const sampleData = randomData(30)
const sampleData100 = randomData(100)

const Simple = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
  </Sparklines>
)

const SimpleCurve = () => (
  <Sparklines data={sampleData}>
    <SparklinesCurve />
  </Sparklines>
)

const Customizable1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#1c8cdc" />
  </Sparklines>
)

const Customizable2 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#fa7e17" />
  </Sparklines>
)

const Customizable3 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#ea485c" />
  </Sparklines>
)

const Customizable4 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#56b45d" />
  </Sparklines>
)

const Customizable5 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#8e44af" />
  </Sparklines>
)

const Customizable6 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#253e56" />
  </Sparklines>
)

const Bounds1 = () => (
  <Sparklines data={sampleData} max={0.5}>
    <SparklinesLine />
  </Sparklines>
)

const Spots1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine style={{fill: 'none'}} />
    <SparklinesSpots />
  </Sparklines>
)

const Spots2 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine color="#56b45d" />
    <SparklinesSpots style={{fill: '#56b45d'}} />
  </Sparklines>
)

const Spots3 = () => (
  <Sparklines data={sampleData} margin={6}>
    <SparklinesLine style={{strokeWidth: 3, stroke: '#336aff', fill: 'none'}} />
    <SparklinesSpots
      size={4}
      style={{stroke: '#336aff', strokeWidth: 3, fill: 'white'}}
    />
  </Sparklines>
)

const Bars1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesBars style={{fill: '#41c3f9'}} />
  </Sparklines>
)

const Bars2 = () => (
  <Sparklines data={sampleData}>
    <SparklinesBars
      style={{stroke: 'white', fill: '#41c3f9', fillOpacity: '.25'}}
    />
    <SparklinesLine style={{stroke: '#41c3f9', fill: 'none'}} />
  </Sparklines>
)

class Dynamic1 extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()])
        }),
      1000
    )
  }

  render() {
    return (
      <Sparklines data={this.state.data} limit={20}>
        <SparklinesLine color="#1c8cdc" />
        <SparklinesSpots />
      </Sparklines>
    )
  }
}

class Dynamic2 extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()])
        }),
      1000
    )
  }

  render() {
    return (
      <Sparklines data={this.state.data} limit={20}>
        <SparklinesBars style={{fill: '#41c3f9', fillOpacity: '.25'}} />
        <SparklinesLine style={{stroke: '#41c3f9', fill: 'none'}} />
      </Sparklines>
    )
  }
}

class Dynamic3 extends Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()])
        }),
      1000
    )
  }

  render() {
    return (
      <Sparklines data={this.state.data} limit={20}>
        <SparklinesLine
          style={{stroke: 'none', fill: '#8e44af', fillOpacity: '1'}}
        />
      </Sparklines>
    )
  }
}

class Dynamic4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    setInterval(
      () =>
        this.setState({
          data: this.state.data.concat([boxMullerRandom()])
        }),
      1000
    )
  }

  render() {
    return (
      <Sparklines data={this.state.data} limit={10}>
        <SparklinesBars color="#0a83d8" />
      </Sparklines>
    )
  }
}

const ReferenceLine1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="max" />
  </Sparklines>
)

const ReferenceLine2 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="min" />
  </Sparklines>
)

const ReferenceLine3 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="mean" />
  </Sparklines>
)

const ReferenceLine4 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="avg" />
  </Sparklines>
)

const ReferenceLine5 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="median" />
  </Sparklines>
)

const ReferenceLine6 = () => (
  <Sparklines data={sampleData}>
    <SparklinesBars style={{fill: 'slategray', fillOpacity: '.5'}} />
    <SparklinesReferenceLine />
  </Sparklines>
)

const NormalBand1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine style={{fill: 'none'}} />
    <SparklinesNormalBand />
  </Sparklines>
)

const NormalBand2 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine style={{fill: 'none'}} />
    <SparklinesNormalBand />
    <SparklinesReferenceLine type="mean" />
  </Sparklines>
)

const RealWorld1 = () => (
  <Sparklines data={sampleData}>
    <SparklinesLine style={{strokeWidth: 3, stroke: '#336aff', fill: 'none'}} />
  </Sparklines>
)

const RealWorld2 = () => (
  <Sparklines data={sampleData100} svgWidth={200}>
    <SparklinesLine style={{stroke: '#2991c8', fill: 'none'}} />
    <SparklinesSpots />
    <SparklinesNormalBand style={{fill: '#2991c8', fillOpacity: 0.1}} />
  </Sparklines>
)

const RealWorld3 = () => (
  <Sparklines data={sampleData100}>
    <SparklinesLine style={{stroke: 'black', fill: 'none'}} />
    <SparklinesSpots style={{fill: 'orange'}} />
  </Sparklines>
)

const RealWorld4 = () => (
  <Sparklines data={sampleData}>
    <SparklinesBars
      style={{stroke: 'white', strokeWidth: '1', fill: '#40c0f5'}}
    />
  </Sparklines>
)

const RealWorld5 = () => (
  <Sparklines data={sampleData} height={80}>
    <SparklinesLine
      style={{stroke: '#8ed53f', strokeWidth: '1', fill: 'none'}}
    />
  </Sparklines>
)

const RealWorld6 = () => (
  <Sparklines data={sampleData} height={80}>
    <SparklinesLine
      style={{stroke: '#d1192e', strokeWidth: '1', fill: 'none'}}
    />
  </Sparklines>
)

const RealWorld7 = () => (
  <Sparklines data={sampleData} height={40}>
    <SparklinesLine
      style={{stroke: '#559500', fill: '#8fc638', fillOpacity: '1'}}
    />
  </Sparklines>
)

const RealWorld8 = () => (
  <Sparklines
    data={sampleData}
    style={{background: '#272727'}}
    margin={10}
    height={40}>
    <SparklinesLine
      style={{stroke: 'none', fill: '#d2673a', fillOpacity: '.5'}}
    />
  </Sparklines>
)

const RealWorld9 = () => (
  <Sparklines
    data={sampleData}
    style={{background: '#00bdcc'}}
    margin={10}
    height={40}>
    <SparklinesLine style={{stroke: 'white', fill: 'none'}} />
    <SparklinesReferenceLine
      style={{stroke: 'white', strokeOpacity: 0.75, strokeDasharray: '2, 2'}}
    />
  </Sparklines>
)

const LineChart1 = () => (
  <div>
    <Simple />
    <SimpleCurve />
    <Customizable1 />
    <Customizable2 />
    <Customizable3 />
    <Customizable4 />
    <Customizable5 />
    <Customizable6 />
    <Spots1 />
    <Spots2 />
    <Spots3 />
    <Bounds1 />
    <Bars1 />
    <Bars2 />
    <Dynamic1 />
    <Dynamic2 />
    <Dynamic3 />
    <Dynamic4 />
    <ReferenceLine1 />
    <ReferenceLine2 />
    <ReferenceLine3 />
    <ReferenceLine4 />
    <ReferenceLine5 />
    <ReferenceLine6 />
    <NormalBand1 />
    <NormalBand2 />
    <RealWorld1 />
    <RealWorld2 />
    <RealWorld3 />
    <RealWorld4 />
    <RealWorld5 />
    <RealWorld6 />
    <RealWorld7 />
    <RealWorld8 />
    <RealWorld9 />
  </div>
)

export default LineChart1
