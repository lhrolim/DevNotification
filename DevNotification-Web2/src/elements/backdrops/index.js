import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'
import '../../css/elements/backdrops.css'

class Index extends Component {
  constructor() {
    super()
    this.toggleBackdrop = this.toggleBackdrop.bind(this)
  }
  toggleBackdrop() {
    this.props.setConfig('rightSidebar', !this.props.rightSidebar)
  }
  render() {
    if (this.props.config.layout === 'empty-view-1') {
      return <div />
    }
    return (
      <div
        className={
          this.props.rightSidebar
            ? 'right-sidebar-backdrop fade in'
            : 'right-sidebar-backdrop'
        }
        onClick={this.toggleBackdrop}
      />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config,
    rightSidebar: state.config.rightSidebar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
