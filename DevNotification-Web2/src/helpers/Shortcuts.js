/**
 * @author Batch Themes Ltd.
 * @description Mousetrap helpers to control layout settings with the keyboard
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setConfig} from '../actions/config'
import Mousetrap from 'mousetrap'
import {indexOf} from 'lodash'

class Shortcuts extends Component {
  constructor() {
    super()
    this.setBackground = this.setBackground.bind(this)
    this.setNavbar = this.setNavbar.bind(this)
    this.setLeftSidebar = this.setLeftSidebar.bind(this)
    this.setLogo = this.setLogo.bind(this)
    this.toggleLayout = this.toggleLayout.bind(this)
    this.toggleRightSidebar = this.toggleRightSidebar.bind(this)
    let self = this
    Mousetrap.bind('ctrl+1', function() {
      self.setBackground()
    })
    Mousetrap.bind('ctrl+2', function() {
      self.setNavbar()
    })
    Mousetrap.bind('ctrl+3', function() {
      self.setLeftSidebar()
    })
    Mousetrap.bind('ctrl+4', function() {
      self.setLogo()
    })
    Mousetrap.bind('ctrl+4', function() {
      self.setLogo()
    })
    Mousetrap.bind('ctrl+5', function() {
      self.toggleLayout()
    })
    Mousetrap.bind('ctrl+6', function() {
      self.toggleRightSidebar()
    })
  }

  toggleLayout() {
    this.props.setConfig('collapsed', !this.props.config.collapsed)
  }

  toggleRightSidebar() {
    this.props.setConfig('rightSidebar', !this.props.config.rightSidebar)
  }

  setBackground() {
    let backgroundColors = Object.keys(this.props.backgroundColors)
    let index = indexOf(backgroundColors, this.props.config.background)
    let nextColor = backgroundColors[index + 1]
      ? backgroundColors[index + 1]
      : backgroundColors[0]
    this.props.setConfig('background', nextColor)
  }
  setNavbar() {
    let backgroundColors = Object.keys(this.props.backgroundColors)
    let index = indexOf(backgroundColors, this.props.config.navbar)
    let nextColor = backgroundColors[index + 1]
      ? backgroundColors[index + 1]
      : backgroundColors[0]
    this.props.setConfig('navbar', nextColor)
  }
  setLeftSidebar() {
    let backgroundColors = Object.keys(this.props.backgroundColors)
    let index = indexOf(backgroundColors, this.props.config.leftSidebar)
    let nextColor = backgroundColors[index + 1]
      ? backgroundColors[index + 1]
      : backgroundColors[0]
    this.props.setConfig('leftSidebar', nextColor)
  }
  setLogo() {
    let colors = Object.keys(this.props.colors)
    let index = indexOf(colors, this.props.config.logo)
    let nextColor = colors[index + 1] ? colors[index + 1] : colors[0]
    this.props.setConfig('logo', nextColor)
  }
  render() {
    return <div />
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config,
    colors: state.colors,
    backgroundColors: state.backgroundColors
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shortcuts)
