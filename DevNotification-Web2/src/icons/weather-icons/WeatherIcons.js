import React, {Component} from 'react'
import Widget from '../../elements/Widget'
import IconSearch from '../IconSearch'
import icons from '../../json/weather-icons.json'
import '../../css/icons/weather-icons.css'

class WeatherIcons extends Component {
  constructor() {
    super()
    this.search = this.search.bind(this)
    this.state = {
      icons: icons
    }
  }
  search(e) {
    let items = Array.from(icons)
    let regex = new RegExp(e.target.value, 'gi')
    let results = items.filter(item => item.match(regex))
    this.setState({
      icons: results
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="Weather icons"
            description="Use the <code>.wi wi-icon</code> classNames for weather icons. Use the <code>.wi-1x</code>, <code>.wi-2x</code> or the <code>.wi-3x</code> classNames for custom icon sizes">
            <IconSearch search={this.search} />
            <div className="row">
              <div className="col">
                <div className="weather-icons">
                  {this.state.icons.map((icon, i) => (
                    <div key={i} className="icon">
                      <div className="icons">
                        <i className={`wi wi-3x ${icon}`} />
                      </div>
                      <div className="icon-class">{icon}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Widget>
        </div>
      </div>
    )
  }
}
export default WeatherIcons
