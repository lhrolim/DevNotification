import React from 'react'
import '../../css/ui-elements/alerts.css'

const Alert = ({className, children}) => (
  <div className={className} role="alert">
    {children}
  </div>
)

export default Alert
