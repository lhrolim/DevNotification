import React from 'react'
import {
  VictoryPie,
  VictoryAxis,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryStack,
  VictoryGroup,
  VictoryCandlestick,
  VictoryTheme,
  VictoryTooltip,
  VictorySelectionContainer
} from 'victory'

export default class LineChart1 extends React.Component {
  render() {
    const style = {
      parent: {border: '1px solid #ccc', margin: '2%', maxWidth: '40%'}
    }
    return (
      <div className="demo">
        <VictoryPie
          data={[
            {x: 1, y: 2, label: 'one'},
            {x: 2, y: 3, label: 'two'},
            {x: 3, y: 5, label: 'three'}
          ]}
        />

        <div>
          <VictoryPie
            startAngle={90}
            endAngle={450}
            data={[
              {x: 1, y: 2, label: 'one'},
              {x: 2, y: 3, label: 'two'},
              {x: 3, y: 5, label: 'three'}
            ]}
          />
          <VictoryPie
            startAngle={90}
            endAngle={-90}
            data={[
              {x: 1, y: 2, label: 'one'},
              {x: 2, y: 3, label: 'two'},
              {x: 3, y: 5, label: 'three'}
            ]}
          />

          <VictoryPie
            innerRadius={100}
            data={[
              {x: 1, y: 2, label: 'one'},
              {x: 2, y: 3, label: 'two'},
              {x: 3, y: 5, label: 'three'}
            ]}
          />
        </div>

        <VictoryChart domain={{x: [0, 11], y: [-10, 10]}}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={[
              {x: 2, y: 5, label: 'right-side-up'},
              {x: 4, y: -6, label: 'upside-down'},
              {x: 6, y: 4, label: 'tiny'},
              {x: 8, y: -5, label: 'or a little \n BIGGER'},
              {x: 10, y: 7, label: 'automatically'}
            ]}
            style={{
              data: {fill: 'tomato', width: 20}
            }}
          />
        </VictoryChart>

        <VictoryChart>
          <VictoryScatter
            data={[
              {x: 1, y: 2, symbol: 'star', size: 5},
              {x: 2, y: 3, symbol: 'square', size: 7},
              {x: 3, y: 5, symbol: 'diamond', size: 3},
              {x: 4, y: 4, symbol: 'circle', size: 8},
              {x: 5, y: 6, symbol: 'triangleUp', size: 4}
            ]}
          />
        </VictoryChart>

        <VictoryChart>
          <VictoryLine
            data={[
              {x: 1, y: 2},
              {x: 2, y: 3},
              {x: 3, y: 5},
              {x: 4, y: 4},
              {x: 5, y: 6}
            ]}
          />
        </VictoryChart>

        <VictoryChart>
          <VictoryArea
            data={[
              {x: 1, y: 2, y0: 0},
              {x: 2, y: 3, y0: 1},
              {x: 3, y: 5, y0: 1},
              {x: 4, y: 4, y0: 2},
              {x: 5, y: 6, y0: 2}
            ]}
          />
        </VictoryChart>

        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{x: 25}}
          scale={{x: 'time'}}>
          <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis dependentAxis />
          <VictoryCandlestick
            candleColors={{positive: '#5f5c5b', negative: '#c43a31'}}
            data={[
              {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
              {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
              {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
              {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
              {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
            ]}
          />
        </VictoryChart>

        <VictoryChart>
          <VictoryGroup offset={20} colorScale={'qualitative'}>
            <VictoryBar data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]} />
            <VictoryBar data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]} />
            <VictoryBar data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]} />
          </VictoryGroup>
        </VictoryChart>

        <VictoryChart
          theme={VictoryTheme.material}
          domain={{x: [0, 5], y: [0, 7]}}>
          <VictoryScatter
            style={{data: {fill: '#c43a31'}}}
            size={7}
            data={[
              {x: 1, y: 2},
              {x: 2, y: 3},
              {x: 3, y: 5},
              {x: 4, y: 4},
              {x: 5, y: 7}
            ]}
          />
        </VictoryChart>

        <VictoryStack>
          <VictoryArea
            data={[{x: 'a', y: 2}, {x: 'b', y: 3}, {x: 'c', y: 5}]}
          />
          <VictoryArea
            data={[{x: 'a', y: 1}, {x: 'b', y: 4}, {x: 'c', y: 5}]}
          />
          <VictoryArea
            data={[{x: 'a', y: 3}, {x: 'b', y: 2}, {x: 'c', y: 6}]}
          />
        </VictoryStack>

        <VictoryChart
          style={style}
          domainPadding={{x: 30, y: 30}}
          height={600}
          width={600}
          events={[
            {
              childName: 'bar',
              target: 'data',
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: () => {
                        return {text: 'o shit'}
                      }
                    },
                    {
                      childName: 'line',
                      target: 'data',
                      mutation: () => {
                        return {style: {stroke: 'lime'}}
                      }
                    },
                    {
                      childName: 'line',
                      target: 'labels',
                      mutation: () => {
                        return {
                          style: {fill: 'green'},
                          text: 'waddup'
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]}>
          <VictoryBar
            name="bar"
            style={{data: {width: 15, fill: 'green'}}}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 2},
              {x: 5, y: 1},
              {x: 6, y: 2},
              {x: 7, y: 3},
              {x: 8, y: 2},
              {x: 9, y: 1},
              {x: 10, y: 2},
              {x: 11, y: 3},
              {x: 12, y: 2},
              {x: 13, y: 1}
            ]}
          />
          <VictoryLine
            name="line"
            y={() => 0.5}
            style={{data: {stroke: 'blue', strokeWidth: 5}}}
            label="LINE"
          />
        </VictoryChart>

        <h3>VictoryChart</h3>
        <p>Custom axes and tickformats; Bar + line chart</p>
        <VictoryChart style={style} domainPadding={{x: 30, y: 30}}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
            tickFormat={x => `${x}\ntick`}
            style={{
              axis: {stroke: 'black', strokeWidth: 2},
              ticks: {stroke: 'transparent'},
              tickLabels: {fill: 'black'}
            }}
          />
          <VictoryAxis
            label="y axis"
            dependentAxis
            tickValues={[0, 1.5, 3, 4.5]}
            style={{
              grid: {strokeWidth: 1},
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent', padding: 15}
            }}
          />
          <VictoryBar
            style={{data: {width: 15, fill: 'orange'}}}
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 2},
              {x: 5, y: 1},
              {x: 6, y: 2},
              {x: 7, y: 3},
              {x: 8, y: 2},
              {x: 9, y: 1},
              {x: 10, y: 2},
              {x: 11, y: 3},
              {x: 12, y: 2},
              {x: 13, y: 1}
            ]}
          />
          <VictoryLine
            y={() => 0.5}
            style={{data: {stroke: 'gold', strokeWidth: 3}}}
            label="LINE"
          />
        </VictoryChart>

        <h2>Primitives</h2>

        <h3>VictoryAxis</h3>
        <p>Default props</p>
        <VictoryAxis style={style} />

        <h3>VictoryBar</h3>
        <p>Default props</p>
        <VictoryBar style={style} />

        <h3>VictoryLine</h3>
        <p>Default props</p>
        <VictoryLine style={style} />

        <h3>VictoryScatter</h3>
        <p>Default props</p>
        <VictoryScatter style={style} />

        <h3>VictoryArea</h3>
        <p>Default props</p>
        <VictoryArea style={style} />

        <h3>VictorySelectionContainer</h3>

        <VictoryGroup
          style={style}
          containerComponent={
            <VictorySelectionContainer
              selectionStyle={{
                stroke: 'tomato',
                strokeWidth: 2,
                fill: 'tomato',
                fillOpacity: 0.1
              }}
            />
          }>
          <VictoryScatter
            style={{
              data: {fill: 'tomato'}
            }}
            size={(datum, active) => (active ? 5 : 3)}
            data={[
              {x: 1, y: -5},
              {x: 2, y: 4},
              {x: 3, y: 2},
              {x: 4, y: 3},
              {x: 5, y: 1},
              {x: 6, y: -3},
              {x: 7, y: 3}
            ]}
          />
          <VictoryScatter
            style={{
              data: {fill: 'blue'}
            }}
            size={(datum, active) => (active ? 5 : 3)}
            data={[
              {x: 1, y: -3},
              {x: 2, y: 5},
              {x: 3, y: 3},
              {x: 4, y: 0},
              {x: 5, y: -2},
              {x: 6, y: -2},
              {x: 7, y: 5}
            ]}
          />
          <VictoryScatter
            data={[
              {x: 1, y: 5},
              {x: 2, y: -4},
              {x: 3, y: -2},
              {x: 4, y: -3},
              {x: 5, y: -1},
              {x: 6, y: 3},
              {x: 7, y: -3}
            ]}
            size={(datum, active) => (active ? 5 : 3)}
          />
        </VictoryGroup>

        <VictoryStack
          style={style}
          containerComponent={
            <VictorySelectionContainer
              selectionStyle={{
                stroke: 'tomato',
                strokeWidth: 2,
                fill: 'tomato',
                fillOpacity: 0.1
              }}
            />
          }>
          <VictoryBar
            style={{
              data: {
                fill: 'tomato',
                stroke: (d, active) => (active ? 'black' : 'none'),
                strokeWidth: 2
              }
            }}
            size={(datum, active) => (active ? 5 : 3)}
            data={[
              {x: 1, y: -5},
              {x: 2, y: 4},
              {x: 3, y: 2},
              {x: 4, y: 3},
              {x: 5, y: 1},
              {x: 6, y: -3},
              {x: 7, y: 3}
            ]}
          />
          <VictoryBar
            style={{
              data: {
                fill: 'orange',
                stroke: (d, active) => (active ? 'black' : 'none'),
                strokeWidth: 2
              }
            }}
            size={(datum, active) => (active ? 5 : 3)}
            data={[
              {x: 1, y: -3},
              {x: 2, y: 5},
              {x: 3, y: 3},
              {x: 4, y: 0},
              {x: 5, y: -2},
              {x: 6, y: -2},
              {x: 7, y: 5}
            ]}
          />
          <VictoryBar
            style={{
              data: {
                fill: 'gold',
                stroke: (d, active) => (active ? 'black' : 'none'),
                strokeWidth: 2
              }
            }}
            data={[
              {x: 1, y: 5},
              {x: 2, y: -4},
              {x: 3, y: -2},
              {x: 4, y: -3},
              {x: 5, y: -1},
              {x: 6, y: 3},
              {x: 7, y: -3}
            ]}
          />
        </VictoryStack>
      </div>
    )
  }
}
