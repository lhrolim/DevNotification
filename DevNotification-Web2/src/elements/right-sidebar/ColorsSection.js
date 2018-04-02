import React from 'react'

const ColorsSection = ({title, colors, config, onClick}) => (
  <ul className="list-group unbordered unstriped">
    <li className="list-group-item text-bold">{title}</li>
    <li className="list-group-item list-group-item-colors">
      <div className="row">
        <div className="col">
          {colors.map((color, i) => (
            <div
              key={i}
              className={`color-block color-${color} bg-${color}`}
              onClick={() => onClick(config, color)}
            />
          ))}
        </div>
      </div>
    </li>
  </ul>
)

export default ColorsSection
