import React from 'react'
import {Link} from 'react-router-dom'

const Screenshot = ({title, url, image}) => (
  <div className="screenshot">
    <p>{title}</p>
    <div className="placeholder">
      <Link to={url}>
        <img className="img-fluid" src={image} alt={title} />
      </Link>
    </div>
  </div>
)

const items = [
  {
    title: 'Default sidebar',
    url: '/demos/demo-1',
    image: '/assets/preview/demo-1.png'
  },
  {
    title: 'Top navigation',
    url: '/demos/demo-2',
    image: '/assets/preview/demo-2.png'
  },
  {
    title: 'Default sidebar',
    url: '/demos/demo-3',
    image: '/assets/preview/demo-3.png'
  },
  {
    title: 'Collapsed sidebar',
    url: '/demos/demo-4',
    image: '/assets/preview/demo-4.png'
  },
  {
    title: 'Top navigation',
    url: '/demos/demo-5',
    image: '/assets/preview/demo-5.png'
  },
  {
    title: 'Collapsed sidebar',
    url: '/demos/demo-6',
    image: '/assets/preview/demo-6.png'
  }
]
const Screenshots = () => (
  <div className="row screenshots">
    <div className="col">
      <div className="container">
        <div className="row">
          {items.map((item, i) => (
            <div className="col-12 col-md-4" key={i}>
              <Screenshot
                title={item.title}
                url={item.url}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Screenshots
