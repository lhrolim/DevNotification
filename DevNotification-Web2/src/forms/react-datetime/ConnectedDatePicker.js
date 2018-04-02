import React from 'react'
import DefaultDatepicker from './DefaultDatepicker'

const ConnectedDatePicker = ({onChangeFrom, onChangeTo, dateFrom, dateTo}) => (
  <form>
    <div className="form-row">
      <div className="col">
        <div className="form-group">
          <label>From: {dateFrom}</label>
          <DefaultDatepicker onChange={onChangeFrom} />
          <small className="form-text text-muted">
            Please pick a start date
          </small>
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label>To: {dateTo}</label>
          <DefaultDatepicker onChange={onChangeTo} />
          <small className="form-text text-muted">
            Please pick an end date
          </small>
        </div>
      </div>
    </div>
  </form>
)

export default ConnectedDatePicker
