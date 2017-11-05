import React, {Component} from 'react'
import BasicExample from './BasicExample'
import StateLabelsExample from './StateLabelsExample'
import BubblesExample from './BubblesExample'
import Widget from '../../elements/Widget'
import {connect} from 'react-redux'
import {darken} from '../../functions'
import '../../css/maps/vector-maps.css'

class VectorMaps extends Component {
  render() {
    let colors = {...this.props.colors}
    let backgroundColors = {...this.props.backgroundColors}
    let backgroundColor = backgroundColors['light']
    let defaultFill = darken(backgroundColor, 5)
    let altFill = darken(backgroundColor, 15)
    return (
      <div>
        <div className="row">
          <div className="col">
            <Widget
              title="Vector maps"
              description="Use the following examples to generate vector maps">
              <div className="Example">
                <div className="Example-map ResponsiveExample">
                  <BasicExample defaultFill={defaultFill} altFill={altFill} />
                </div>
              </div>
              <div className="Example">
                <div className="Example-map ResponsiveExample">
                  <StateLabelsExample
                    colors={colors}
                    backgroundColor={backgroundColor}
                  />
                </div>
              </div>
              <div className="Example">
                <div className="Example-map">
                  <BubblesExample
                    colors={colors}
                    backgroundColor={backgroundColor}
                  />
                </div>
              </div>
            </Widget>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config,
    colors: state.colors,
    backgroundColors: state.backgroundColors
  }
}
export default connect(mapStateToProps)(VectorMaps)
