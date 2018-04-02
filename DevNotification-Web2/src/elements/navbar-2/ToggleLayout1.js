import React from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'

class ToggleLayout1 extends React.Component {
  constructor() {
    super()
    this.toggleLayout = this.toggleLayout.bind(this)
  }
  toggleLayout() {
    let {layout} = this.props.config
    if (layout === 'default-sidebar-1') {
      this.props.setConfig('layout', 'collapsed-sidebar-1')
    } else {
      this.props.setConfig('layout', 'default-sidebar-1')
    }
    this.props.setConfig('collapsed', false)
  }
  render() {
    return (
      <ul className="nav nav-inline nav-toggle-layout-1">
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
export default connect(mapStateToProps, mapDispatchToProps)(ToggleLayout1)
