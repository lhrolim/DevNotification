import React from 'react'
import {materialDesignColors} from '../reducers/colors'
import Widget from '../elements/Widget'

const BackgroundColors = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Background colors"
        description="Use the <code>.bg-{color}</code> class to set the background color in any element">
        <div className="material-design-colors">
          <pre>{JSON.stringify(materialDesignColors, null, 2)}</pre>
        </div>
      </Widget>
    </div>
  </div>
)

export default BackgroundColors
