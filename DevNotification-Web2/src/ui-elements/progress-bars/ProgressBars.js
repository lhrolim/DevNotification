import React from 'react'
import '../../css/ui-elements/progress-bars.css'
import Widget from '../../elements/Widget'
import {random} from '../../functions'
const progressBars = [
  {
    color: 'default',
    value: random(50, 90)
  },
  {
    color: 'primary',
    value: random(50, 90)
  },
  {
    color: 'secondary',
    value: random(50, 90)
  },
  {
    color: 'info',
    value: random(50, 90)
  },
  {
    color: 'success',
    value: random(50, 90)
  },
  {
    color: 'warning',
    value: random(50, 90)
  },
  {
    color: 'danger',
    value: random(50, 90)
  }
]
const ProgressBars = () => (
  <div className="row sample-progress-bars">
    <div className="col">
      <Widget
        title="Small progress bars"
        description="Use the <code>.progress-sm</code> class for small progress bars">
        <div className="row">
          <div className="col">
            {progressBars.map((progressBar, i) => {
              let style = {width: progressBar.value + '%'}
              return (
                <div className="progress progress-sm" key={i}>
                  <div
                    className={`progress-bar bg-${progressBar.color}`}
                    value={`${progressBar.value}`}
                    style={style}
                    role="progressbar"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Widget>
      <Widget
        title="Default progress bars"
        description="Use the <code>.progress</code> class for default progress bars">
        <div className="row">
          <div className="col">
            {progressBars.map((progressBar, i) => {
              let style = {width: progressBar.value + '%'}
              return (
                <div className="progress" key={i}>
                  <div
                    className={`progress-bar bg-${progressBar.color}`}
                    value={`${progressBar.value}`}
                    style={style}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Widget>
      <Widget
        title="Large progress bars"
        description="Use the <code>.progress-lg</code> class for large progress bars">
        <div className="row">
          <div className="col">
            {progressBars.map((progressBar, i) => {
              let style = {width: progressBar.value + '%'}
              return (
                <div className="progress progress-lg" key={i}>
                  <div
                    className={`progress-bar bg-${progressBar.color}`}
                    value={`${progressBar.value}`}
                    style={style}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Widget>
      <Widget
        title="Large progress bars with values"
        description="Use the <code>.progress-lg</code> class for large progress bars">
        <div className="row">
          <div className="col">
            {progressBars.map((progressBar, i) => {
              let style = {width: progressBar.value + '%'}
              return (
                <div className="progress progress-lg" key={i}>
                  <div
                    className={`progress-bar bg-${progressBar.color}`}
                    value={`${progressBar.value}`}
                    style={style}>
                    {progressBar.value}%
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default ProgressBars
