import React, {Component} from 'react'
import {validateField, submitForm} from '../../pages/functions'
import Widget from '../../elements/Widget'
import InputGroup from './InputGroup'
import Select from './Select'
import Textarea from './Textarea'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import {UncontrolledAlert} from 'reactstrap'
import '../../css/forms/steps.css'

class Steps extends Component {
  constructor(props) {
    super(props)
    this.validate = this.validate.bind(this)
    this.submit = this.submit.bind(this)
    this.complete = this.complete.bind(this)
    this.goBack = this.goBack.bind(this)
    this.toggle = this.toggle.bind(this)
    let fields = [
      {
        name: 'firstName',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'First name',
          required: true
        }
      },
      {
        name: 'lastName',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Last name',
          required: true
        }
      },
      {
        name: 'email',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Email',
          required: true,
          email: true
        }
      },
      {
        name: 'age',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Age',
          required: true,
          numeric: true
        }
      },
      {
        name: 'universityName',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'University name',
          required: true
        }
      },
      {
        name: 'degreeLevel',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Degree level',
          required: true
        }
      },
      {
        name: 'country',
        value: '',
        errors: [],
        rules: {
          title: 'Country',
          required: true
        },
        placeholder: 'Choose your country',
        options: ['USA', 'Canada', 'Australia', 'UK']
      },
      {
        name: 'language',
        value: '',
        errors: [],
        rules: {
          title: 'Language',
          required: true
        },
        placeholder: 'Choose your language',
        options: ['English', 'French', 'Spanish', 'Portuguese']
      },
      {
        name: 'companyName',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Company name',
          required: true
        }
      },
      {
        name: 'position',
        value: '',
        type: 'text',
        errors: [],
        rules: {
          title: 'Position',
          required: true
        }
      },
      {
        name: 'jobDescription',
        value: '',
        errors: [],
        rules: {
          title: 'Job description',
          required: true
        }
      }
    ]
    this.state = {
      fields: fields,
      activeTab: 0,
      tab1Enabled: false,
      tab2Enabled: false,
      canSubmit: false
    }
  }
  validate(e, field) {
    let fields = validateField(e, field, this.state.fields)
    let tab1Enabled = true
    for (let i = 0; i < 4; i++) {
      if (fields[i].errors.length > 0) {
        tab1Enabled = false
        break
      }
    }
    let tab2Enabled = true
    for (let i = 4; i < 8; i++) {
      if (fields[i].errors.length > 0) {
        tab2Enabled = false
        break
      }
    }
    this.setState({
      fields: fields,
      tab1Enabled: tab1Enabled,
      tab2Enabled: tab2Enabled
    })
    if (this.state.activeTab === 0 && tab1Enabled) {
      this.toggle(1)
    }
    if (this.state.activeTab === 1 && tab2Enabled) {
      this.toggle(2)
    }
    return false
  }
  submit(e) {
    e.preventDefault()
    let fields = submitForm(e, this.state.fields)
    let tab1Enabled = true
    for (let i = 0; i < 4; i++) {
      if (fields[i].errors.length > 0) {
        tab1Enabled = false
        break
      }
    }
    let tab2Enabled = true
    for (let i = 4; i < 8; i++) {
      if (fields[i].errors.length > 0) {
        tab2Enabled = false
        break
      }
    }
    this.setState({
      fields: fields,
      tab1Enabled: tab1Enabled,
      tab2Enabled: tab2Enabled
    })
    /*
		if(this.state.activeTab === 0 && tab1Enabled) {
			this.toggle(1)
		}
		if(this.state.activeTab === 1 && tab2Enabled) {
			this.toggle(2)
		}
		*/
    return false
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  goBack(e) {
    e.preventDefault()
    let tab1Enabled = this.state.tab1Enabled
    if (this.state.activeTab === 1) {
      this.toggle(0)
    }
    if (this.state.activeTab === 2 && tab1Enabled) {
      this.toggle(1)
    }
    return false
  }
  complete(e) {
    e.preventDefault()
    console.log('complete')
    let canSubmit = true
    for (let i = 0; i < this.state.fields.length; i++) {
      if (this.state.fields[i].errors.length > 0) {
        canSubmit = false
        break
      }
    }
    console.log('canSubmit', canSubmit)
    this.setState = {
      canSubmit: canSubmit
    }
    return false
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <Widget
            title="Basic example"
            description="Validate form steps and fields with the ApproveJS validation library">
            {this.state.canSubmit && (
              <UncontrolledAlert className={'alert-bordered'} color={'primary'}>
                <strong>Congratulations!</strong> All fields are valid{' '}
              </UncontrolledAlert>
            )}
            <Nav tabs className="nav nav-tabs nav-tabs-justified">
              <NavItem>
                <NavLink
                  className={this.state.activeTab === 0 ? 'active' : ''}
                  onClick={() => {
                    this.toggle(0)
                  }}>
                  <span className="badge badge-primary badge-rounded badge-lg m-r-10">
                    1
                  </span>
                  <span>Personal data</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.state.activeTab === 1
                      ? 'active'
                      : !this.state.tab1Enabled ? 'disabled' : ''
                  }
                  onClick={() => {
                    this.toggle(1)
                  }}>
                  <span className="badge badge-primary badge-rounded badge-lg m-r-10">
                    2
                  </span>
                  <span>Education</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.state.activeTab === 2
                      ? 'active'
                      : !this.state.tab2Enabled ? 'disabled' : ''
                  }
                  onClick={() => {
                    this.toggle(2)
                  }}>
                  <span className="badge badge-primary badge-rounded badge-lg m-r-10">
                    3
                  </span>
                  <span>Work experience</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab.toString()}>
              <TabPane tabId="0">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[0]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[0])}
                      />
                    </div>
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[1]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[1])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[2]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[2])}
                      />
                    </div>
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[3]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[3])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-primary" onClick={this.submit}>
                        Next step
                      </button>
                    </div>
                  </div>
                </form>
              </TabPane>
              <TabPane tabId="1">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[4]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[4])}
                      />
                    </div>
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[5]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[5])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-xl-6">
                      <Select
                        field={this.state.fields[6]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[6])}
                      />
                    </div>
                    <div className="col col-xl-6">
                      <Select
                        field={this.state.fields[7]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[7])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        onClick={this.goBack}
                        className="btn btn-primary btn-outline m-r-10">
                        Previous step
                      </button>
                      <button className="btn btn-primary" onClick={this.submit}>
                        Next step
                      </button>
                    </div>
                  </div>
                </form>
              </TabPane>
              <TabPane tabId="2">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[8]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[8])}
                      />
                    </div>
                    <div className="col col-xl-6">
                      <InputGroup
                        field={this.state.fields[9]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[9])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-xl-6">
                      <Textarea
                        field={this.state.fields[10]}
                        validate={(e, field) =>
                          this.validate(e, this.state.fields[10])}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button
                        onClick={this.goBack}
                        className="btn btn-primary btn-outline m-r-10">
                        Previous step
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={this.complete}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </TabPane>
            </TabContent>
          </Widget>
        </div>
      </div>
    )
  }
}
export default Steps
