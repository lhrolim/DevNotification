import React from 'react'
import Widget from '../../elements/Widget'

const questions = [
  {
    question: 'How do I open the template?',
    answer:
      'First, make sure the <code>create-react-app</code> package is installed. For more information go to this <a href="https://github.com/facebookincubator/create-react-app" target="_blank">url</a>. Then you need to run <code>npm install</code> to install the template followed by the <code>npm start</code> command to start the development server'
  },
  {
    question: 'How do I add a new page?',
    answer:
      'Add your file to the <code>Routes.js</code> file and then add the route inside the <code>ConnectedRouter</code> component. Then add your route to the <code>src/reducers/navigation</code> reducer to make it available to all the redux connected components in the template'
  }
]

const Customization = () => (
  <Widget title="Customization" description="Frequently asked questions">
    <div className="row">
      <div className="col">
        <ol>
          {questions.map((item, i) => (
            <li key={i}>
              <p>{item.question}</p>
              <p dangerouslySetInnerHTML={{__html: item.answer}} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Widget>
)
export default Customization
