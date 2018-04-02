import React from 'react'
import Widget from '../../elements/Widget'

const TemplateStructure = () => (
  <Widget
    title="Template structure"
    description="Structural elements available in the template">
    <div className="row">
      <div className="col">
        <p>The template includes the following structural elements:</p>
        <ul>
          <li>Navbar</li>
          <li>Top navigation</li>
          <li>Jumbotron</li>
          <li>Left sidebar</li>
          <li>Right sidebar</li>
          <li>Main content</li>
        </ul>
      </div>
    </div>
  </Widget>
)
export default TemplateStructure
