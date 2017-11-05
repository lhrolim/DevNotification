import React from 'react'
import InlineDatepicker from './InlineDatepicker'
import DefaultDatepicker from './DefaultDatepicker'
import ConnectedDatePicker from './ConnectedDatePicker'
import Widget from '../../elements/Widget'
import '../../css/forms/react-datetime.css'

class ReactDatetime extends React.Component {
  constructor() {
    super()
    this._onChangeDefaultDate = this._onChangeDefaultDate.bind(this)
    this._onChangeInlineDate = this._onChangeInlineDate.bind(this)
    this._onChangeDateFrom = this._onChangeDateFrom.bind(this)
    this._onChangeDateTo = this._onChangeDateTo.bind(this)
    this.state = {
      inlineDate: null,
      defaultDate: null,
      dateFrom: null,
      dateTo: null
    }
  }

  _onChangeDefaultDate(e) {
    this.setState({
      defaultDate: e.format('DD-MM-YYYY')
    })
  }

  _onChangeInlineDate(e) {
    this.setState({
      inlineDate: e.format('DD-MM-YYYY')
    })
  }

  _onChangeDateFrom(e) {
    this.setState({
      dateFrom: e.format('DD-MM-YYYY')
    })
  }

  _onChangeDateTo(e) {
    this.setState({
      dateTo: e.format('DD-MM-YYYY')
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="Default date picker"
            description="Use the <code>Datepicker</code> component as a starting point for a simple date picker">
            <div className="row">
              <div className="col col-lg-3">
                <div className="form-group">
                  {this.state.defaultDate && (
                    <label>Selected date: {this.state.defaultDate}</label>
                  )}
                  {!this.state.defaultDate && <label>Select date</label>}
                  <DefaultDatepicker
                    onChange={e => this._onChangeDefaultDate(e)}
                  />
                  <small className="form-text text-muted">
                    Please pick a date
                  </small>
                </div>
              </div>
            </div>
          </Widget>
          <Widget
            title="Connected date picker"
            description="Use the <code>ConnectedDatePicker</code> component as a starting point for an inline date picker">
            <div className="row">
              <div className="col col-lg-6">
                <ConnectedDatePicker
                  onChangeFrom={e => this._onChangeDateFrom(e)}
                  onChangeTo={e => this._onChangeDateTo(e)}
                  dateFrom={this.state.dateFrom}
                  dateTo={this.state.dateTo}
                />
              </div>
            </div>
          </Widget>
          <Widget
            title="Inline date picker"
            description="Use the <code>InlineDatepicker</code> component as a starting point for an inline date picker">
            <div className="row">
              <div className="col col-lg-3">
                <InlineDatepicker onChange={e => this._onChangeInlineDate(e)} />
                {this.state.inlineDate && (
                  <p className="m-t-50">
                    Selected date: {this.state.inlineDate}
                  </p>
                )}
              </div>
            </div>
          </Widget>
        </div>
      </div>
    )
  }
}

export default ReactDatetime
