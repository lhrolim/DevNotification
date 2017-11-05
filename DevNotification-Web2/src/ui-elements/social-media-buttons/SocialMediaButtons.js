import React from 'react'
import Widget from '../../elements/Widget'
import colors from '../../json/social-media-colors.json'

const SocialMediaButtons = () => (
  <div className="row demo-buttons">
    <div className="col-12">
      <Widget
        title="Default social media buttons"
        description="Use the <code>.btn-{color}</code> className for default buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-icon`}>
                <i className={`fa fa-${color}`} />
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Outlined social media buttons"
        description="Use the <code>.btn-outline .btn-{color}</code> className for outlined buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-outline btn-icon`}>
                <i className={`fa fa-${color}`} />
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Rounded social media buttons"
        description="Use the <code>.btn-rounded .btn-{color}</code> className for rounded buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-rounded btn-icon`}>
                <i className={`fa fa-${color}`} />
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Outlined rounded social media buttons"
        description="Use the <code>.btn-rounded .btn-outline .btn-{color}</code> className for outlined rounded buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button
                key={i}
                className={`btn btn-${color} btn-rounded btn-outline btn-icon`}>
                <i className={`fa fa-${color}`} />
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Flat social media buttons"
        description="Use the <code>.btn-flat .btn-{color}</code> className for flat buttons">
        <div className="row">
          <div className="col">
            {Object.keys(colors).map((color, i) => (
              <button key={i} className={`btn btn-${color} btn-flat btn-icon`}>
                <i className={`fa fa-${color}`} />
                <span>{color}</span>
              </button>
            ))}
          </div>
        </div>
      </Widget>
      <Widget
        title="Circle media buttons"
        description="Use the <code>.btn-circle .btn-{color}</code> className for circle buttons. Add the <code>.btn-outline</code> and the <code>.btn-flat</code> classNames for outlined and flat buttons. Use the <code>.btn-xs</code> and the <code>.btn-lg</code> classNames for alternative sizing">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                {Object.keys(colors).map((color, i) => (
                  <button
                    className={`btn btn-${color} btn-circle btn-xs`}
                    key={i}>
                    <i className={`fa fa-${color}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {Object.keys(colors).map((color, i) => (
                  <button className={`btn btn-${color} btn-circle`} key={i}>
                    <i className={`fa fa-${color}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              <div className="col">
                {Object.keys(colors).map((color, i) => (
                  <button
                    className={`btn btn-${color} btn-circle btn-lg`}
                    key={i}>
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
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
                    <i className={`fa fa-${color}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
export default SocialMediaButtons
