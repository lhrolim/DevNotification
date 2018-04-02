import React, {Component} from 'react'
import {connect} from 'react-redux'
import {UncontrolledTooltip} from 'reactstrap'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/tooltips.css'

class Tooltips extends Component {
  render() {
    let divStyle = {
      display: 'inline-block',
      marginRight: '10px'
    }
    return (
      <div>
        {Object.keys(this.props.colors).map((color, i) => (
          <div className="row" key={i}>
            <div className="col">
              <Widget
                title={`Tooltip with ${color} colors`}
                description={`Use the <code>.modal-${color}</code> className for ${color} modals`}>
                <div className="row">
                  <div className="col">
                    {['top', 'right', 'bottom', 'left'].map((placement, j) => (
                      <div key={j} style={divStyle}>
                        <button
                          id={`tooltip-${placement}-${color}`}
                          className={`m-r-10 btn btn-${color}`}>
                          {placement}
                        </button>
                        <UncontrolledTooltip
                          placement={placement}
                          target={`tooltip-${placement}-${color}`}
                          className={`tooltip-${color}`}>
                          Hello world!
                        </UncontrolledTooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </Widget>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Tooltips)
