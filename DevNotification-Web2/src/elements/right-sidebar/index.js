import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setConfig} from '../../actions/config'
import ColorsSection from './ColorsSection'
import '../../css/elements/right-sidebar.css'

class Index extends Component {
  constructor() {
    super()
    this.colors = [
      'light',
      'dark',
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'danger'
    ]

    this.setConfig = this.setConfig.bind(this)
    this.layouts = [
      {
        url: '/layouts/default-sidebar-1',
        icon: '',
        title: 'Default sidebar',
        items: []
      },
      {
        url: '/layouts/collapsed-sidebar-1',
        icon: '',
        title: 'Collapsed sidebar',
        items: []
      },
      {
        url: '/layouts/top-navigation-1',
        icon: '',
        title: 'Top navigation',
        items: []
      }
    ]
  }
  setConfig(config, color) {
    this.props.setConfig(config, color)
  }
  render() {
    if (this.props.config.layout === 'empty-view-1') {
      return <div />
    }
    return (
      <div
        className={
          this.props.rightSidebar
            ? 'right-sidebar-outer show-from-right'
            : 'right-sidebar-outer'
        }>
        <div className="right-sidebar-inner">
          <div className="right-sidebar">
            <h4>Theme configuration</h4>
            <ul className="list-group unbordered unstriped">
              <li className="list-group-item text-bold">Layout</li>
              {this.layouts.map((layout, i) => (
                <li className="list-group-item" key={i}>
                  <div className="row">
                    <div className="col">
                      <Link to={layout.url}>{layout.title}</Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <ColorsSection
              title="Navbar color"
              colors={this.colors}
              onClick={this.setConfig}
              config={'navbar'}
            />
            <ColorsSection
              title="Top navigation color"
              colors={this.colors}
              onClick={this.setConfig}
              config={'topNavigation'}
            />
            <ColorsSection
              title="Logo color"
              colors={this.colors}
              onClick={this.setConfig}
              config={'logo'}
            />
            <ColorsSection
              title="Left sidebar color"
              colors={this.colors}
              onClick={this.setConfig}
              config={'leftSidebar'}
            />
            {/*
            <ColorsSection
              title="Left sidebar icons"
              colors={this.colors}
              onClick={this.setConfig}
              config={'leftSidebarIcons'}
            />
						*/}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config,
    navbarColors: state.config.navbarColors,
    leftSidebarColors: state.config.leftSidebarColors,
    colors: state.colors,
    backgroundColors: state.backgroundColors,
    rightSidebar: state.config.rightSidebar
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setConfig: (key, value) => dispatch(setConfig(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
