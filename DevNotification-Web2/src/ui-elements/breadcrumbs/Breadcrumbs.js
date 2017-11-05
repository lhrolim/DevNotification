import React from 'react'
import {connect} from 'react-redux'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/breadcrumbs.css'

const Breadcrumbs = ({colors}) => (
  <div className="row">
    <div className="col">
      <Widget
        title="Breadcrumb home icon"
        description="Breadcrumb home icons can be customized by using the <code>.icon-home</code> and <code>.icon-grid</code> classNames">
        <div className="row">
          <div className="col">
            <p className="description m-b-10">
              <code>.breadcrumb .icon-home</code>
            </p>
            <ol className="breadcrumb icon-home icon-angle-right">
              <li>
                <a>Sigma</a>
              </li>
              <li>
                <a>UI Elements</a>
              </li>
              <li className="active">Breadcrumbs</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="description m-b-10">
              <code>.breadcrumb .icon-grid</code>
            </p>
            <ol className="breadcrumb icon-grid icon-angle-double-right">
              <li>
                <a>Sigma</a>
              </li>
              <li>
                <a>UI Elements</a>
              </li>
              <li className="active">Breadcrumbs</li>
            </ol>
          </div>
        </div>
      </Widget>
      <Widget
        title="Breadcrumb separators"
        description="Breadcrumb separator icons can be customized by using the <code>.icon-angle-right</code> and <code>.icon-double-right</code> classNames">
        <div className="row">
          <div className="col">
            <p className="description m-b-10">
              <code>.breadcrumb .icon-angle-right</code>
            </p>
            <ol className="breadcrumb icon-home icon-angle-right">
              <li>
                <a>Sigma</a>
              </li>
              <li>
                <a>UI Elements</a>
              </li>
              <li className="active">Breadcrumbs</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="description m-b-10">
              <code>.breadcrumb .icon-angle-double-right</code>
            </p>
            <ol className="breadcrumb icon-grid icon-angle-double-right">
              <li>
                <a>Sigma</a>
              </li>
              <li>
                <a>UI Elements</a>
              </li>
              <li className="active">Breadcrumbs</li>
            </ol>
          </div>
        </div>
      </Widget>
      <Widget
        title="Breadcrumb backgrounds"
        description="Backgrounds can be customized using any of the <code>.breadcrumb-{color}</code> classNames">
        {Object.keys(colors).map((color, i) => (
          <div className="row m-b-20" key={i}>
            <div className="col">
              <p className="description m-b-10">
                <code>.breadcrumb .breadcrumb-{color}</code>
              </p>
              <ol
                className={`breadcrumb breadcrumb-${color} icon-home icon-angle-right`}>
                <li>
                  <a>Sigma</a>
                </li>
                <li>
                  <a>UI Elements</a>
                </li>
                <li className="active">Breadcrumbs</li>
              </ol>
            </div>
          </div>
        ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs)
