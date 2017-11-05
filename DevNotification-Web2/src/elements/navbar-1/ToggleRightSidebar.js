import React from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'

class ToggleRightSidebar extends React.Component {
  constructor() {
    super()
    this.toggleRightSidebar = this.toggleRightSidebar.bind(this)
  }
  toggleRightSidebar() {
    this.props.setConfig('rightSidebar', !this.props.config.rightSidebar)
  }
  render() {
    return (
      <li className="nav-item">
        <a
          className="nav-link toggle-right-sidebar"
          onClick={this.toggleRightSidebar}>
          <i className="material-icons">settings</i>
        </a>
      </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(ToggleRightSidebar)
