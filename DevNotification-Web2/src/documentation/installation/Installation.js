import React from 'react'
import Widget from '../../elements/Widget'
import TemplateStructure from './TemplateStructure'
const Installation = () => (
  <div className="row">
    <div className="col">
      <Widget title="Documentation" description="Installation instructions">
        <div className="row">
          <div className="col">
            <p>
              <b>Sigma</b> is an advanced, responsive dashboard template built
              with{' '}
              <a
                href="https://facebook.github.io/react"
                target="_blank"
                rel="noopener noreferrer">
                React
              </a>{' '}
              and{' '}
              <a
                href="http://v4-alpha.getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer">
                Bootstrap 4
              </a>.
            </p>
            <p>
              It includes 3 different layouts, 8 navbar, top navigation and left
              sidebar color styles, more than 100 components in every layout and
              lots of widgets and custom made reusable components to help you
              kickstart your next React application.
            </p>
            <p>
              <b>Sigma</b> is 100% ready to use. Just unzip the files and run
              the following commands:{' '}
            </p>
            <ol>
              <li>
                <code>npm install</code> to install all the required
                dependencies
              </li>
              <li>
                <code>npm start</code> to run the development server
              </li>
              <li>
                Open <code>http://localhost:3000</code>
              </li>
            </ol>
            <p>
              To build a production ready bundle, run the following commands:{' '}
            </p>
            <ol>
              <li>
                <code>npm run build</code>
              </li>
              <li>
                Go to the <code>build</code> folder where the production ready
                files are generated
              </li>
            </ol>
            <p>
              The files in the <code>build</code> folder are ready to use and
              can be uploaded to any server.
            </p>
          </div>
        </div>
      </Widget>
      <TemplateStructure />
    </div>
  </div>
)
export default Installation
