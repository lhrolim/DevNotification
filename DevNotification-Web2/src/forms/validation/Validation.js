import React, {Component} from 'react'
import approve from 'approvejs'
import Widget from '../../elements/Widget'
import InputGroup from './InputGroup'

class Validation extends Component {
  constructor() {
    super()
    this.state = {
      submit: false,
      errors: []
    }
    this.submit = this.submit.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.validate = this.validate.bind(this)
    this.validateField = this.validateField.bind(this)
    let fields = [
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'required',
        rules: {
          title: 'Required field',
          required: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'email',
        rules: {
          title: 'Email',
          required: true,
          email: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'url',
        rules: {
          title: 'Url',
          required: true,
          url: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'alphanumeric',
        rules: {
          title: 'Alphanumeric',
          required: true,
          alphaNumeric: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'numeric',
        rules: {
          title: 'Numeric',
          required: true,
          numeric: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'alpha',
        rules: {
          title: 'Alpha',
          required: true,
          alpha: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'decimal',
        rules: {
          title: 'Decimal',
          required: true,
          decimal: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'currency',
        rules: {
          title: 'Currency',
          required: true,
          currency: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'ip',
        rules: {
          title: 'IP Address',
          required: true,
          ip: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'minimum',
        rules: {
          title: 'Minimum',
          required: true,
          min: 5
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'maximum',
        rules: {
          title: 'Maximum',
          required: true,
          max: 10
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'range',
        rules: {
          title: 'Range',
          required: true,
          range: {
            min: 5,
            max: 10
          }
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'equal',
        rules: {
          title: 'Equal value',
          required: true,
          equal: {
            value: 'Password',
            field: 'Password'
          }
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'regex',
        rules: {
          title: 'Regex',
          required: true,
          format: /^[A-Za-z]+$/
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'time',
        rules: {
          title: 'Time',
          required: true,
          time: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'date',
        rules: {
          title: 'Date',
          required: true,
          date: 'ymd'
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'truthy',
        rules: {
          title: 'Truthy',
          required: true,
          truthy: true
        }
      },
      {
        value: '',
        errors: [],
        type: 'text',
        name: 'falsy',
        rules: {
          title: 'Falsy',
          required: true,
          falsy: true
        }
      }
    ]
    this.state = {
      fields: fields
    }
  }

  validateField(e, field, fields) {
    e.preventDefault()
    field.value = ''
    let result = approve.value(e.target.value, field.rules)
    field.errors = []
    if (result.errors.length > 0) {
      field.errors = Array.from(result.errors)
      field.value = ''
    } else {
      field.value = e.target.value
    }
    fields = fields.map(item => {
      if (item.name === field.name) {
        return field
      } else {
        return item
      }
    })
    return fields
  }

  validate(e, field) {
    let fields = this.validateField(e, field, this.state.fields)
    this.setState({
      fields: fields
    })
    return false
  }
  submitForm(e, fields) {
    e.preventDefault()
    fields = fields.map(field => {
      field.errors = []
      let result = approve.value(field.value, field.rules)
      if (result.errors.length > 0) {
        field.errors = Array.from(result.errors)
      }
      return field
    })
    return fields
  }
  submit(e) {
    e.preventDefault()
    let fields = this.submitForm(e, this.state.fields)
    this.setState({
      fields: fields
    })
    return false
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <Widget
              title="Form validation"
              description="Validate fields using the ApproveJS validation library">
              <form onSubmit={this.submit}>
                <div className="row m-b-20">
                  <div className="col">
                    <button className="btn btn-primary" onClick={this.submit}>
                      Validate all fields
                    </button>
                  </div>
                </div>
                {this.state.fields.map((field, i) => (
                  <div className="row" key={i}>
                    <div className="col-12 col-lg-4">
                      <InputGroup
                        field={this.state.fields[i]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[i])}
                      />
                    </div>
                    <div className="col-12 col-lg-8">
                      <pre className="p-10">
                        <code>
                          {JSON.stringify(this.state.fields[i], undefined, 2)}
                        </code>
                      </pre>
                    </div>
                  </div>
                ))}
              </form>
            </Widget>
          </div>
        </div>
      </div>
    )
  }
}
export default Validation
