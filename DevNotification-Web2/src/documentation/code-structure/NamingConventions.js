import React from 'react'
import Widget from '../../elements/Widget'

const NamingConventions = () => (
  <div>
    <Widget title="Code structure" description="File and folder code structure">
      <div className="row">
        <div className="col">
          <p>
            <b>Sigma</b> uses the{' '}
            <a
              href="https://github.com/facebookincubator/create-react-app"
              target="_blank"
              rel="noopener noreferrer">
              <code>create-react-app</code>
            </a>{' '}
            project to generate the initial project structure. For more
            information on the project and to familiarize yourself with the
            folder structure, please go to the{' '}
            <a
              href="https://github.com/facebookincubator/create-react-app"
              target="_blank"
              rel="noopener noreferrer">
              <code>create-react-app</code>
            </a>{' '}
            github page.
          </p>
        </div>
      </div>
    </Widget>
    <Widget
      title="Naming conventions"
      description="File and folder name definitions and conventions used in the template">
      <div className="row">
        <div className="col">
          <p>
            Every demo view and component included in the template follows the
            <code>controller/view</code>
            naming convention.
          </p>
          <p>
            {' '}
            For example, for the <code>forms/validation</code> view, located at{' '}
            <code>http://localhost:3000/forms/validation</code>, the following
            naming conventions are used:
          </p>
          <ol className="naming-conventions">
            <li>
              <code>.js</code>
              files are located in the
              <code>src/forms/validation</code>
              folder. This folder includes the main view and the components used
              by the view.
            </li>
            <li>
              <code>.scss</code>
              files are located in the
              <code>src/scss/forms</code>
              folder
            </li>
            <li>
              Compiled <code>.css</code>
              files are generated in the
              <code>src/css/forms</code>
              folder. Don't modify this files, as they are generated every time
              the <code>npm start</code> command is run.
            </li>
            <li>
              <span>
                For the <code>forms/validation</code> example, the file
                locations are as follows:
              </span>
              <ol>
                <li>
                  <code>src/app/forms/validation/index.js</code> and
                  <code>src/app/forms/validation/Validation.js</code>
                </li>
                <li>
                  <code>src/scss/forms/validation.scss</code>
                </li>
                <li>
                  <code>src/css/forms/validation.css</code>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </Widget>
  </div>
)
export default NamingConventions
