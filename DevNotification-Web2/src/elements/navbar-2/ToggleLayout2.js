import React from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'

class ToggleLayout2 extends React.Component {
  constructor() {
    super()
    this.toggleLayout = this.toggleLayout.bind(this)
  }
  toggleLayout() {
    let {collapsed} = this.props.config
    this.props.setConfig('collapsed', !collapsed)
  }
  render() {
    return (
      <ul className="nav nav-inline nav-toggle-layout-2">
        <li className="nav-item">
          <a className="nav-link toggle-layout" onClick={this.toggleLayout}>
            <i className="sli-menu" />
          </a>
        </li>
      </ul>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToggleLayout2)
