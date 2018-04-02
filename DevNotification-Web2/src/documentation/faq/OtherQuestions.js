import React from 'react'
import Widget from '../../elements/Widget'

const questions = [
  {
    question: 'I have a question, but it is not listed here, what can I do?',
    answer:
      "Send us an email to support@batchthemes.com or contact us through our Theme Forest profile and we'll do our best to try to help you."
  },
  {
    question:
      'I would like to see a new plugin installed or functionality developed in <b>Sigma</b>, is it possible?',
    answer:
      'We are always trying to improve and adding new functionalities and plugins to <b>Sigma</b>, so every request is welcomed and will be evaluated'
  },
  {
    question: 'I found a bug, what can I do?',
    answer:
      "Please let us know and we'll do our best to fix it as soon as possible"
  },
  {
    question: 'Are updates free?',
    answer: 'Yes, they are and always will be for our customers'
  }
]

const OtherQuestions = () => (
  <Widget title="Other questions" description="Frequently asked questions">
    <div className="row">
      <div className="col">
        <ol>
          {questions.map((item, i) => (
            <li key={i}>
              <p dangerouslySetInnerHTML={{__html: item.question}} />
              <p dangerouslySetInnerHTML={{__html: item.answer}} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Widget>
)
export default OtherQuestions
