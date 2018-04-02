import React, {Component} from 'react'
import Widget from '../../elements/Widget'
import IconSearch from '../IconSearch'
import icons from '../../json/font-awesome.json'
import '../../css/icons/font-awesome.css'

class FontAwesome extends Component {
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
            title="Font awesome"
            description="Use the <code>.fa fa-icon</code> classNames for font awesome icons">
            <IconSearch search={this.search} />
            <div className="row">
              <div className="col">
                <div className="font-awesome-icons">
                  {this.state.icons.map((icon, i) => (
                    <div key={i} className="icon">
                      <div className="icons">
                        <i className={`fa fa-3x ${icon}`} />
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
export default FontAwesome
