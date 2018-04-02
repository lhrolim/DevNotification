import React from 'react'
import '../css/pages/form.css'

const Form = ({title, description, children}) => (
  <div className="sample-form">
    <h3>{title}</h3>
    <form onSubmit={e => e.preventDefault()}>
      <div className="description">{description}</div>
      {children}
    </form>
  </div>
)

export default Form
