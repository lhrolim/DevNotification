import React, {Component} from 'react'
import Select from 'react-select'

class ReactSelectSimple extends Component {
  constructor() {
    super()
    this.updateValue = this.updateValue.bind(this)
    this.state = {
      disabled: false,
      searchable: true,
      selectValue: '',
      clearable: true
    }

    this.states = [
      {
        value: 'australian-capital-territory',
        label: 'Australian Capital Territory',
        className: 'State-ACT'
      },
      {
        value: 'new-south-wales',
        label: 'New South Wales',
        className: 'State-NSW'
      },
      {value: 'victoria', label: 'Victoria', className: 'State-Vic'},
      {value: 'queensland', label: 'Queensland', className: 'State-Qld'},
      {
        value: 'western-australia',
        label: 'Western Australia',
        className: 'State-WA'
      },
      {
        value: 'south-australia',
        label: 'South Australia',
        className: 'State-SA'
      },
      {value: 'tasmania', label: 'Tasmania', className: 'State-Tas'},
      {
        value: 'northern-territory',
        label: 'Northern Territory',
        className: 'State-NT'
      }
    ]
  }

  updateValue(newValue) {
    console.log('State changed to ' + newValue)
    this.setState({
      selectValue: newValue
    })
  }

  render() {
    var options = this.states
    return (
      <div className="row">
        <div className="col">
          <Select
            autosize={false}
            placeholder="Select state"
            autofocus
            options={options}
            simpleValue
            clearable={this.state.clearable}
            name="selected-state"
            disabled={this.state.disabled}
            value={this.state.selectValue}
            onChange={this.updateValue}
            searchable={this.state.searchable}
          />
        </div>
      </div>
    )
  }
}

export default ReactSelectSimple
