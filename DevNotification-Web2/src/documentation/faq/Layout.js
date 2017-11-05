import React from 'react'
import Widget from '../../elements/Widget'

const questions = [
  {
    question: 'How do I set a default global page layout?',
    answer:
      'Open the <code>src/reducers/config.js</code> file and set the layout property. This property will be available to all components in the <code>StoredLayout</code> higher order component'
  },
  {
    question: 'How do I change the page layout inside a view?',
    answer:
      'Use the <code>setConfig</code> redux action, with the layout parameter. This calls the <code>setConfig</code> reducer which sets the global config layout variable'
  },
  {
    question: 'How do I change the layout styles?',
    answer:
      'Layout variables are defined in the <code>scss/_variables.scss</code> file. To modify a layout, for example, the <code>default-sidebar-1</code> layout, the <code>.scss</code> file is located at <code>scss/layouts/default-sidebar-1.scss</code> and will get compiled to <code>css/layouts/default-sidebar-1.css</code>. The colors for this layout are defined in the <code>styles/palettes</code> folder.'
  }
]

const Layout = () => (
  <Widget title="Layout" description="Frequently asked questions">
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
export default Layout
