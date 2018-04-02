import React from 'react'
import SingleLineList from './SingleLineList'
import DoubleLineList from './DoubleLineList'
import SingleLineListWithIcons from './SingleLineListWithIcons'
import DoubleLineListWithIcons from './DoubleLineListWithIcons'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/lists.css'

const Lists = () => (
  <div className="row">
    <div className="col-12 col-xl-6">
      <Widget
        title="Single line with icons, images and badges"
        description="Add icons, images and badges to the <code>.list-group-item</code> and combine them with any of the <code>flexbox</code> grid row classNames for lists with icons, images or badges">
        <div className="row">
          <div className="col">
            <SingleLineListWithIcons />
          </div>
        </div>
      </Widget>
      <Widget
        title="Lists with icons, images or badges"
        description="Add icons and badges to the <code>.list-group-item</code> and combine them with any of the <code>flexbox</code> grid row classNames for lists with icons, images or badges">
        <div className="row">
          <div className="col">
            <DoubleLineListWithIcons />
          </div>
        </div>
      </Widget>
    </div>
    <div className="col-12 col-xl-6">
      <Widget
        title="Single line list"
        description="Use the <code>.list-group-item</code> className with any <code>a, button or li</code> element inside a <code>.list-group</code> element">
        <div className="row">
          <div className="col">
            <SingleLineList />
          </div>
        </div>
      </Widget>
      <Widget
        title="Double line list"
        description="Use the <code>.list-group-item-heading</code> and the <code>.list-group-item-text</code> classNames inside the <code>.list-group-item</code> for double line lists">
        <div className="row">
          <div className="col">
            <DoubleLineList />
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default Lists
