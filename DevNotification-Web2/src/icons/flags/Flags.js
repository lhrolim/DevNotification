import React, {Component} from 'react'
import Widget from '../../elements/Widget'
import IconSearch from '../IconSearch'
import icons from '../../json/flags.json'
import '../../css/icons/flags.css'

class Flags extends Component {
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
    let results = items.filter(item => item.name.match(regex))
    this.setState({
      icons: results
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="Flag icons"
            description="Use the <code>.flag-icon-{countryCode}</code> classNames for flag icons. Use the <code>.flag-1x</code>, <code>.flag-2x</code> or the <code>.flag-3x</code> classNames for custom flag sizes">
            <IconSearch search={this.search} />
            <div className="row">
              <div className="col">
                <div className="flag-icons">
                  {this.state.icons.map((icon, i) => (
                    <div key={i} className="icon">
                      <div className="icons">
                        <div className="flag-3x">
                          <span
                            className={`flag flag-icon-background flag-icon flag-icon-${icon.code}`}
                          />
                        </div>
                      </div>
                      <div className="icon-class">{icon.name}</div>
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
export default Flags
