import React from 'react'
import Trend from 'react-trend'

import Widget from '../elements/Widget'
const ReactTrend = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="React Trend"
        description="Simple, elegant trend graphs for React.js">
        <div className="row">
          <div className="col-12 col-md-4">
            <Trend
              smooth
              autoDraw
              autoDrawDuration={3000}
              autoDrawEasing="ease-out"
              data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
              gradient={['#222']}
              radius={10}
              strokeWidth={2}
              strokeLinecap={'square'}
              height={120}
            />
          </div>
          <div className="col-12 col-md-4">
            <Trend
              smooth
              autoDraw
              autoDrawDuration={3000}
              autoDrawEasing="ease-out"
              data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
              gradient={['#42b3f4']}
              radius={25}
              strokeWidth={1.5}
              strokeLinecap={'round'}
              height={120}
            />
          </div>
          <div className="col-12 col-md-4">
            <Trend
              smooth
              autoDraw
              autoDrawDuration={3000}
              autoDrawEasing="ease-out"
              data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
              gradient={['#00c6ff', '#F0F', '#FF0']}
              radius={12}
              strokeWidth={1}
              strokeLinecap={'butt'}
              height={120}
            />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default ReactTrend
