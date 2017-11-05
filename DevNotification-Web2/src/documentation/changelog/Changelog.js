import React from 'react'

const items = [
  {
    date: 'Sep 24, 2017',
    title: 'Update',
    actions: ['Added 3 sample dashboards', 'Added top navigation layout']
  },
  {
    date: 'Sep 18, 2017',
    title: 'Release',
    actions: [
      'Initial release',
      'Published template at <a href="http://sigma.batchthemes.com" target="_blank" rel="noopener noreferrer">this demo url</a>'
    ]
  }
]
const Changelog = () => (
  <div className="row">
    <div className="col">
      {items.map((item, i) => (
        <div className="widget" key={i}>
          <div className="row">
            <div className="col">
              <div className="title">{item.date}</div>
              <div className="description">{item.title}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                {item.actions.map((action, j) => (
                  <li key={j} dangerouslySetInnerHTML={{__html: action}} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
export default Changelog
