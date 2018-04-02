import React from 'react'
import Datetime from 'react-datetime'

const InlineDatepicker = ({onChange}) => (
  <Datetime
    dateFormat="DD-MM-YYYY"
    timeFormat={false}
    open={true}
    input={false}
    viewMode={'days'}
    onChange={onChange}
  />
)

export default InlineDatepicker
