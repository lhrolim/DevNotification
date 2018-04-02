import React, {Component} from 'react'
import Widget from '../../elements/Widget'
import IconSearch from '../IconSearch'
import icons from '../../json/ionicons.json'
import '../../css/icons/ionicons.css'

class Ionicons extends Component {
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
            title="Ionicons"
            description="Use the <code>.ion-icon icon</code> classNames for ionicons. Use the <code>.ion-icon-1x</code>, <code>.ion-icon-2x</code> or the <code>.ion-icon-3x</code> classNames for custom icon sizes">
            <IconSearch search={this.search} />
            <div className="row">
              <div className="col">
                <div className="ionicons">
                  {this.state.icons.map((icon, i) => (
                    <div key={i} className="icon">
                      <div className="icons">
                        <i className={`ion-icon ion-icon-3x ${icon}`} />
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
export default Ionicons
