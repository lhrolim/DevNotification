import React from 'react'
import Widget from '../../elements/Widget'

const questions = [
  {
    question: 'Where can I find the colors available in the template?',
    answer:
      'Colors are defined in the <code>src/scss/_colors.scss</code> file and in the <code>src/reducers/colors.js</code> reducer. Default color palettes are defined in the <code>src/scss/_palettes.scss</code> file and additional palettes can be found in the <code>src/scss/palettes</code> folder'
  },
  {
    question: 'How do I set the page background colors?',
    answer:
      'Use the setConfig action, with the background parameter. This calls the setConfig reducer which modified the global config background variable'
  },
  {
    question: 'How do I change the page background and text colors?',
    answer:
      'Background colors are defined for each palette in the <code>src/scss/_colors.scss</code> file. Palettes are defined in the <code>src/scss/_palettes.scss</code> file and in the <code>src/scss/palettes</code> folder'
  },
  {
    question:
      'How do I change the navbar, left sidebar, right sidebar, top navigation and jumbotron colors?',
    answer:
      'Navbar, left sidebar, right sidebar, top navigation and jumbotron colors are defined for each palette in the <code>src/scss/palettes</code> folder'
  },
  {
    question:
      'How do I change the colors of other elements, such as tables and dropdowns?',
    answer:
      'Colors are defined for most elements in palettes in the <code>src/scss/palettes</code> folder. In this folder you can find palette definitions for most elements'
  }
]

const Styles = () => (
  <Widget title="Styles" description="Frequently asked questions">
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
export default Styles
