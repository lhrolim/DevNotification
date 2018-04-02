import React, {Component} from 'react'
import {startCase} from 'lodash'
import '../../css/ui-elements/dropdowns.css'
import Widget from '../../elements/Widget'
import SmallDropdown from './SmallDropdown'
import DefaultDropdown from './DefaultDropdown'
import LargeDropdown from './LargeDropdown'
import DropdownWithColumns from './DropdownWithColumns'
import AnimatedDropdown from './AnimatedDropdown'
import animations from '../../json/css-animations.json'

const animationKeys = [
  'attention_seekers',
  'bouncing_entrances',
  'fading_entrances',
  'flippers',
  'lightspeed',
  'rotating_entrances',
  'specials',
  'zooming_entrances',
  'sliding_entrances'
]
class Dropdowns extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <Widget
              title="Dropdown menus"
              description="Use the <code>.small-dropdown</code> className for small dropdown menus. Use the <code>.dropdown</code> className for default dropdowns menus. Use the <code>.dropdown-lg</code> className for large dropdowns menus">
              <div className="row">
                <div className="col col-xl-3">
                  <SmallDropdown
                    title="Small dropdown"
                    size="sm"
                    buttonType="btn-outline btn-sm"
                    color="primary"
                  />
                </div>
                <div className="col col-xl-3">
                  <DefaultDropdown
                    title="Default dropdown"
                    size="default"
                    buttonType="btn-outline"
                    color="primary"
                  />
                </div>
                <div className="col col-xl-3">
                  <LargeDropdown
                    title="Large dropdown"
                    size="lg"
                    buttonType="btn-outline btn-lg"
                    color="primary"
                  />
                </div>
              </div>
            </Widget>
            <Widget
              title="Dropdown menus with columns"
              description="Use the <code>.dropdown-menu-cols</code> with the <code>.dropdown-cols-1</code> , the <code>.dropdown-cols-2</code> , the <code>.dropdown-cols-3</code> or the <code>.dropdown-cols-4</code> classNames to put the dropdown items in 1, 2, 3 or 4 columns">
              <div className="row">
                <div className="col">
                  <div className="row m-b-20">
                    <div className="col col-xl-3">
                      <DropdownWithColumns
                        title="1 column"
                        cols="1"
                        size="default"
                        buttonType="btn-outline"
                        color="primary"
                      />
                    </div>
                    <div className="col col-xl-3">
                      <DropdownWithColumns
                        title="2 columns"
                        cols="2"
                        size="default"
                        buttonType="btn-outline"
                        color="primary"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-xl-3">
                      <DropdownWithColumns
                        title="3 columns"
                        cols="3"
                        size="default"
                        buttonType="btn-outline"
                        color="primary"
                      />
                    </div>
                    <div className="col col-xl-3">
                      <DropdownWithColumns
                        title="4 columns"
                        cols="4"
                        size="default"
                        buttonType="btn-outline"
                        color="primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Widget>
          </div>
        </div>
        <div className="row demo-dropdowns">
          <div className="col">
            {animationKeys.map((animationKey, i) => (
              <Widget
                key={i}
                title={
                  startCase(animationKey)
                    .replace(/s$/, '')
                    .replace(/_/gi, ' ') + ' animations'
                }
                description={`Use the following classNames for ${animationKey
                  .replace(/s$/, '')
                  .replace(/_/g, ' ')} animations`}>
                <div className="row">
                  {animations[animationKey].map((animation, j) => (
                    <div className="col-12 col-md-3" key={j}>
                      <AnimatedDropdown
                        title={`${animation}`}
                        size="default"
                        buttonType="btn-outline"
                        animation={animation}
                        color="primary"
                      />
                    </div>
                  ))}
                </div>
              </Widget>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Dropdowns
