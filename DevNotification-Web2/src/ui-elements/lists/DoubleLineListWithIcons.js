import React from 'react'
const DoubleLineListWithIcons = () => (
  <ul className="list-group">
    <li className="list-group-item">
      <div className="row">
        <div className="col flex-40 align-self-center">
          <i className="fa fa-star" />
        </div>
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Icon left</p>
        </div>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
        <div className="col flex-40 align-self-center">
          <span className="badge badge-primary badge-rounded">3</span>
        </div>
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Tag to the left</p>
        </div>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
        <div className="col flex-60 align-self-center">
          <img
            className="rounded-circle max-w-40"
            src="/assets/faces/m9.png"
            alt=""
          />
        </div>
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Image to the left</p>
        </div>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Icon right</p>
        </div>
        <div className="col flex-40 align-self-center">
          <i className="fa fa-star" />
        </div>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Tag to the right</p>
        </div>
        <div className="col flex-40 align-self-center">
          <span className="badge badge-primary badge-rounded">3</span>
        </div>
      </div>
    </li>
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <p className="list-group-item-heading">List group item heading</p>
          <p className="list-group-item-text">Image to the right</p>
        </div>
        <div className="col flex-60 align-self-center">
          <img
            className="rounded-circle max-w-40 float-xs-right"
            src="/assets/faces/m9.png"
            alt=""
          />
        </div>
      </div>
    </li>
  </ul>
)
export default DoubleLineListWithIcons
