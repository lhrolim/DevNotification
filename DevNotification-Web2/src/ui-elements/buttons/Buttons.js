import React from 'react'
import {connect} from 'react-redux'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/buttons.css'

const Buttons = ({colors}) => (
  <div className="row demo-buttons">
    <div className="col-12">
      <Widget
        title="Default buttons"
        description="Use the <code>.btn-{color}</code> className for default buttons">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                {Object.keys(colors).map((color, i) => (
                  <button key={i} className={`btn btn-${color}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {Object.keys(colors).map((color, i) => (
                  <button key={i} className={`btn btn-${color} btn-icon`}>
                    <i className="material-icons">grade</i>
                    <span>{color}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Widget>
      <Widget
        title="Outlined buttons"
        description="Use the <code>.btn-outline .btn-{color}</code> className for outlined buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-outline`}>
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-outline btn-icon`}>
                <i className="material-icons">grade</i>
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Rounded buttons"
        description="Use the <code>.btn-rounded .btn-{color}</code> className for rounded buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-rounded`}>
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-rounded btn-icon`}>
                <i className="material-icons">grade</i>
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Outlined rounded buttons"
        description="Use the <code>.btn-rounded .btn-outline .btn-{color}</code> className for outlined rounded buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-rounded btn-outline`}>
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-rounded btn-outline btn-icon`}>
                <i className="material-icons">grade</i>
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Flat buttons"
        description="Use the <code>.btn-flat .btn-{color}</code> className for flat buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-flat`}>
                {color}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-flat btn-icon`}>
                <i className="material-icons">grade</i>
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Circle media buttons"
        description="Use the <code>.btn-circle .btn-{color}</code> className for circle buttons. Add the <code>.btn-outline</code> and the <code>.btn-flat</code> classNames for outlined and flat buttons. Use the <code>.btn-xs</code> and the <code>.btn-lg</code> classNames for additional sizes">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button className={`btn btn-${color} btn-circle btn-xs`} key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button className={`btn btn-${color} btn-circle`} key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button className={`btn btn-${color} btn-circle btn-lg`} key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-xs btn-outline`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-outline`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-lg btn-outline`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-xs btn-flat`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-flat`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                className={`btn btn-${color} btn-circle btn-lg btn-flat`}
                key={i}>
                <i className="material-icons">grade</i>
              </button>
            ))}
          </div>
        </div>
      </Widget>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
