import React from 'react'
import Widget from '../../elements/Widget'
import TextInputs from './TextInputs'
import RadioInputs from './RadioInputs'
import InlineForms from './InlineForms'
import SelectMenus from './SelectMenus'
import Checkboxes from './Checkboxes'
import InputSizing from './InputSizing'
import '../../css/forms/default-forms.css'

const DefaultForms = () => (
  <div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <Widget title="Text inputs" description="Default input and text fields">
          <TextInputs />
        </Widget>
        <Widget
          title="Radio inputs"
          description="Use the <code>.custom-radio</code> className with the <code>.custom-control</code> className for custom radio inputs">
          <RadioInputs />
        </Widget>
        <Widget
          title="Inline forms"
          description="Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row">
          <InlineForms />
        </Widget>
      </div>
      <div className="col-12 col-lg-6">
        <Widget
          title="Select menus"
          description="Use the <code>.custom-select</code> for custom select menus">
          <SelectMenus />
        </Widget>
        <Widget
          title="Checkboxes"
          description="Use the <code>.custom-checkbox</code> className with the <code>.custom-control</code> className for custom checkboxes">
          <Checkboxes />
        </Widget>
        <Widget
          title="Input sizing"
          description="Use the <code>.form-control-lg</code> for larger inputs and the <code>.form-control-sm</code> for smaller inputs">
          <InputSizing />
        </Widget>
      </div>
    </div>
  </div>
)
export default DefaultForms
