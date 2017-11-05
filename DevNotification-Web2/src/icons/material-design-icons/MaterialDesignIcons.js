import React, {Component} from 'react'
import Widget from '../../elements/Widget'
import IconSearch from '../IconSearch'
import icons from '../../json/material-design-icons.json'
import '../../css/icons/material-design-icons.css'

class MaterialDesignIcons extends Component {
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
            title="Material design icons"
            description="Use the <code>.material-icons</code> with the <code>icon</code> class inside the <code>i</code> element for material design icons. Use the <code>.material-icons-1x</code>, <code>.material-icons-2x</code> or the <code>.material-icons-3x</code> classNames for custom icon sizes">
            <IconSearch search={this.search} />
            <div className="row">
              <div className="col">
                <div className="material-design-icons">
                  {this.state.icons.map((icon, i) => (
                    <div key={i} className="icon">
                      <div className="icons">
                        <i className="material-icons material-icons-3x">
                          {icon}
                        </i>
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
export default MaterialDesignIcons
