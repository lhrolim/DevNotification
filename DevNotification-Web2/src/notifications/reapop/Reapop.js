import React from 'react'
import {connect} from 'react-redux'
import {addNotification as notify} from 'reapop'
import Widget from '../../elements/Widget'
import {startCase} from 'lodash'

class Reapop extends React.Component {
  constructor(props) {
    super(props)
    this._onClick = this._onClick.bind(this)
    this.status = ['default', 'success', 'danger', 'warning', 'info']
    this.position = [
      {
        key: 'top',
        value: 't'
      },
      {
        key: 'top_center',
        value: 'tc'
      },
      {
        key: 'top_left',
        value: 'tl'
      },
      {
        key: 'top_right',
        value: 'tr'
      },
      {
        key: 'bottom',
        value: 'b'
      },
      {
        key: 'bottom_center',
        value: 'bc'
      },
      {
        key: 'bottom_left',
        value: 'bl'
      },
      {
        key: 'bottom_right',
        value: 'br'
      }
    ]
  }

  _onClick(status, position) {
    const {notify} = this.props
    if (status === 'danger') {
      status = 'error'
    }
    let title = 'Great'
    switch (status) {
      case 'success':
        title = 'Great'
        break
      case 'default':
      case 'info':
        title = 'Hello!'
        break
      case 'danger':
      case 'error':
        title = 'Error!'
        break
      case 'warning':
        title = 'Wait!'
        break
      default:
        title = 'Great'
        break
    }
    notify({
      title: title,
      message: 'This is a notification',
      status: status,
      position: position.value,
      dismissible: true,
      dismissAfter: 3000
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          {this.status.map((status, i) => (
            <Widget
              title={`${startCase(status)} notifications`}
              description={`Use the following examples to show ${status} notifications to your users`}
              key={i}>
              {this.position.map((position, j) => (
                <button
                  key={j}
                  className={`m-r-10 m-b-10 btn btn-${status}`}
                  onClick={() => this._onClick(status, position)}>
                  {`Show ${position.key.replace(/_/gi, ' ')} notification`}
                </button>
              ))}
            </Widget>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(null, {notify})(Reapop)
