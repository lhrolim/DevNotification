import React from 'react'
import Widget from '../../elements/Widget'

const credits = [
  {
    name: 'React',
    url: 'https://facebook.github.io/react/',
    description: 'A javascript library for building user interfaces'
  },
  {
    name: 'Bootstrap',
    url: 'http://v4-alpha.getbootstrap.com',
    description:
      'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web'
  },
  {
    name: 'recompose',
    url: 'https://github.com/acdlite/recompose',
    description:
      'A React utility belt for function components and higher-order components'
  },
  {
    name: 'reactstrap',
    url: 'http://reactstrap.github.io/',
    description: 'Easy to use React Bootstrap 4 components'
  },
  {
    name: 'create-react-app',
    url: 'https://github.com/facebookincubator/create-react-app',
    description: 'Create React apps with no build configuration'
  },
  {
    name: 'Redux',
    url: 'http://redux.js.org/',
    description: 'Redux is a predictable state container for JavaScript apps.'
  },
  {
    name: 'SASS',
    url: 'http://sass-lang.com/',
    description:
      'CSS with superpowers. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
  },
  {
    name: 'Google fonts',
    url: 'https://fonts.google.com/',
    description:
      'Making the web more beautiful, fast, and open through great typography'
  },
  {
    name: 'Unsplash',
    url: 'https://unsplash.com/',
    description: 'Free (do whatever you want) high-resolution photos.'
  },
  {
    name: 'Animate.css',
    url: 'https://github.com/daneden/animate.css',
    description: 'Just-add-water CSS animations'
  },
  {
    name: 'Bourbon',
    url: 'http://bourbon.io/',
    description: 'A simple and lightweight mixin library for Sass'
  },
  {
    name: 'Font Awesome',
    url: 'http://fontawesome.io',
    description: 'The iconic font and CSS toolkit'
  },
  {
    name: 'flag-icon-css',
    url: 'http://flag-icon-css.lip.is/',
    description:
      'A collection of all country flags in SVG plus the CSS for easier integration.'
  },
  {
    name: 'Material Icons',
    url: 'https://google.github.io/material-design-icons/',
    description:
      'Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a UI. Ensuring readability and clarity at both large and small sizes, these icons have been optimized for beautiful display on all common platforms and display resolutions.'
  },
  {
    name: 'Weather Icons',
    url: 'https://erikflowers.github.io/weather-icons/',
    description: '222 Weather Themed Icons and CSS'
  },
  {
    name: 'Simple line icons',
    url: 'https://github.com/thesabbir/simple-line-icons',
    description: 'Simple and Minimal Line Icons'
  },
  {
    name: 'Ionicons',
    url: 'http://ionicons.com/',
    description: 'The premium icon font for Ionic Framework.'
  },
  {
    name: 'Chartist.js',
    url: 'https://gionkunz.github.io/chartist-js/',
    description: 'Simple responsive charts'
  },
  {
    name: 'Google Maps',
    url: 'https://developers.google.com/maps/',
    description:
      'Millions of websites and apps use Google Maps APIs to power location experiences for their users.'
  },
  {
    name: 'DataMaps',
    url: 'http://datamaps.github.io/',
    description:
      'Customizable SVG map visualizations for the web in a single Javascript file using D3.js'
  },
  {
    name: 'Recharts',
    url: 'http://recharts.org/#/en-US/',
    description: 'A composable charting library built on React components'
  }
]
const Credits = () => (
  <div className="row">
    <div className="col">
      <Widget
        title="Credits"
        description="Frameworks, scripts and dependencies used in the template">
        <ol>
          {credits.map((credit, i) => (
            <li key={i}>
              <h5>
                <a href={credit.url} target="_blank">
                  {credit.name}
                </a>
              </h5>
              <p>{credit.description}</p>
            </li>
          ))}
        </ol>
      </Widget>
    </div>
  </div>
)
export default Credits
