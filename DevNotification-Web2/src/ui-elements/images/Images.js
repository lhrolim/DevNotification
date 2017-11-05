import React from 'react'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/images.css'

const Images = () => (
  <div>
    <div className="row">
      <div className="col">
        <Widget
          title="Rounded images"
          description="For rounded images use the <code>.rounded</code> className">
          <div className="row">
            <div className="col">
              <p className="nowrap">
                <img
                  src="/assets/images/304.jpg"
                  className="max-w-50 m-r-20 rounded"
                  alt=""
                />
                <img
                  src="/assets/images/304.jpg"
                  className="max-w-100 m-r-20 rounded"
                  alt=""
                />
                <img
                  src="/assets/images/304.jpg"
                  className="max-w-150 m-r-20 rounded"
                  alt=""
                />
              </p>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Thumbnail images"
          description="For thumbnail images use the <code>.img-thumbnail</code> className">
          <div className="row">
            <div className="col">
              <p className="nowrap">
                <img
                  src="/assets/images/307.jpg"
                  className="max-w-50 m-r-20 img-thumbnail"
                  alt=""
                />
                <img
                  src="/assets/images/307.jpg"
                  className="max-w-100 m-r-20 img-thumbnail"
                  alt=""
                />
                <img
                  src="/assets/images/307.jpg"
                  className="max-w-150 m-r-20 img-thumbnail"
                  alt=""
                />
              </p>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Circular images"
          description="For circular images use the <code>.rounded-circle</code> className">
          <div className="row">
            <div className="col">
              <p className="nowrap">
                <img
                  src="/assets/images/306.jpg"
                  className="max-w-50 m-r-20 rounded-circle"
                  alt=""
                />
                <img
                  src="/assets/images/306.jpg"
                  className="max-w-100 m-r-20 rounded-circle"
                  alt=""
                />
                <img
                  src="/assets/images/306.jpg"
                  className="max-w-150 m-r-20 rounded-circle"
                  alt=""
                />
              </p>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Zooming animations"
          description="Apply the <code>.zoom-in-1</code> , <code>.zoom-in-2</code> , <code>.zoom-out-1</code> or the <code>.zoom-out-2</code> classNames for zooming image animations">
          <div className="row">
            <div className="col">
              <div className="fx-demo">
                <div className="zoom-in-1">
                  <img
                    src="/assets/images/871.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="zoom-in-2">
                  <img
                    src="/assets/images/871.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="zoom-out-1">
                  <img
                    src="/assets/images/871.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="zoom-out-2">
                  <img
                    src="/assets/images/871.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Sliding animations"
          description="Apply the <code>.slide-left</code> , <code>.slide-right</code> , <code>.slide-up</code> or the <code>.slide-down</code> classNames for sliding image animations">
          <div className="row">
            <div className="col">
              <div className="fx-demo">
                <div className="slide-left">
                  <img
                    src="/assets/images/870.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="slide-right">
                  <img
                    src="/assets/images/870.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="slide-up">
                  <img
                    src="/assets/images/870.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="slide-down">
                  <img
                    src="/assets/images/870.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Rotating animations"
          description="Apply the <code>.rotate-1-4</code> classNames for rotating image animations">
          <div className="row">
            <div className="col">
              <div className="fx-demo">
                <div className="rotate-1">
                  <img
                    src="/assets/images/869.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="rotate-2">
                  <img
                    src="/assets/images/869.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="rotate-3">
                  <img
                    src="/assets/images/869.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="rotate-4">
                  <img
                    src="/assets/images/869.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Opacity animations"
          description="Apply the <code>.opacity-1</code> or the <code>.opacity-2</code> classNames and combine it with any of the <code>bg-color</code> helper classNames for opacity image animations">
          <div className="row">
            <div className="col">
              <div className="fx-demo">
                <div className="opacity-1">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-1 bg-primary">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-1 bg-secondary">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-1 bg-info">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-2">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-2 bg-success">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-2 bg-warning">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="opacity-2 bg-danger">
                  <img
                    src="/assets/images/319.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Widget
          title="Other effects"
          description="Additional effects that work only on the latest standards compliant browsers">
          <div className="row">
            <div className="col">
              <div className="fx-demo">
                <div className="blur-1">
                  <img
                    src="/assets/images/771.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="grayscale-1">
                  <img
                    src="/assets/images/771.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="sepia-1">
                  <img
                    src="/assets/images/771.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="fx-demo">
                <div className="blur-1 grayscale-1">
                  <img
                    src="/assets/images/771.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Widget>
      </div>
    </div>
  </div>
)
export default Images
