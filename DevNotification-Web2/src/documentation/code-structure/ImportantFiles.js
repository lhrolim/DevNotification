import React from 'react'
import Widget from '../../elements/Widget'

const importantFiles = [
  {
    name: 'public/index.html',
    description: 'Main html file'
  },
  {
    name: 'src/index.js',
    description: 'Application bootstrap file'
  },
  {
    name: 'src/App.js',
    description: 'Main application component. Layouts are defined here'
  },
  {
    name: 'src/Routes.js',
    description: 'Routes are defined here'
  },
  {
    name: 'src/reducers/index.js',
    description: 'Template reducers are combined here'
  },
  {
    name: 'src/layouts/*.js',
    description: 'Template layout higher order components are defined here'
  },
  {
    name: 'src/demos/*.js',
    description:
      'Template demos are defined here. Use this files as your starting point for custom views'
  },
  {
    name: 'src/reducers/colors.js',
    description: 'Global colors and palettes are defined here'
  },
  {
    name: 'src/reducers/navigation.js',
    description: 'Template navigation is defined here'
  },
  {
    name: 'src/scss/_variables.scss',
    description: 'Global SASS variables are imported and defined here'
  },
  {
    name:
      'src/styles/_colors.scss, src/scss/_palettes.scss and src/scss/palettes/*.scss',
    description: 'Colors and palettes are defined in this files and folder'
  },
  {
    name: 'src/scss/layouts/*.scss',
    description: 'Template layouts are defined in this folder'
  },
  {
    name: ' src/scss/_mixins.scss',
    description: 'SASS mixins are defined here'
  },
  {
    name: ' src/scss/helpers/*.scss',
    description: 'Global SASS helpers are defined in this folder'
  }
]
const ImportantFiles = () => (
  <Widget title="Files" description="Important files in the template">
    <div className="row">
      <div className="col">
        <ol>
          {importantFiles.map((file, i) => (
            <li key={i}>
              <p>
                <code>{file.name}</code>
              </p>
              <p dangerouslySetInnerHTML={{__html: file.description}} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Widget>
)
export default ImportantFiles
