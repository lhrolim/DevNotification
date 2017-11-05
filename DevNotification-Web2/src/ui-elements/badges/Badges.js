import React from 'react'
import {connect} from 'react-redux'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/badges.css'

const Badges = ({colors}) => (
  <div className="row sample-badges">
    <div className="col">
      {Object.keys(colors).map((color, i) => (
        <Widget
          key={i}
          title={`Badges using ${color} colors`}
          description={`Use the <code>.badge-${color}</code> className for ${color} color badges. Use the <code>.badge-sm</code> and the <code>.badge-lg</code> classNames for additional sizes. Use the <code>.badge-outline</code> className for outlined badges. Use the <code>.badge-rounded</code> className for rounded badges`}>
          <div className="row">
            <div className="col">
              <p>
                <span className={`badge badge-${color} badge-sm`}>{color}</span>
                <span className={`badge badge-${color}`}>{color}</span>
                <span className={`badge badge-${color} badge-lg`}>{color}</span>
              </p>
              <p>
                <span className={`badge badge-outline badge-${color} badge-sm`}>
                  {color}
                </span>
                <span className={`badge badge-outline badge-${color}`}>
                  {color}
                </span>
                <span className={`badge badge-outline badge-${color} badge-lg`}>
                  {color}
                </span>
              </p>
              <p>
                <span className={`badge badge-rounded badge-${color} badge-sm`}>
                  1
                </span>
                <span className={`badge badge-rounded badge-${color}`}>2</span>
                <span className={`badge badge-rounded badge-${color} badge-lg`}>
                  3
                </span>
              </p>
              <p>
                <span
                  className={`badge badge-rounded badge-outline badge-${color} badge-sm`}>
                  1
                </span>
                <span
                  className={`badge badge-rounded badge-outline badge-${color}`}>
                  2
                </span>
                <span
                  className={`badge badge-rounded badge-outline badge-${color} badge-lg`}>
                  3
                </span>
              </p>
            </div>
          </div>
        </Widget>
      ))}
    </div>
  </div>
)
const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(Badges)
