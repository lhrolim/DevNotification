import React from 'react'
import {connect} from 'react-redux'
import Widget from '../../elements/Widget'
import '../../css/ui-elements/typography.css'

const Typography = ({colors}) => (
  <div className="row">
    <div className="col">
      <Widget
        title="Default typography"
        description="All HTML headings, <code>h1</code> to <code>h6</code> are available">
        <div className="row">
          <div className="col">
            <table className="table table-unbordered">
              <tbody>
                <tr>
                  <td>h1</td>
                  <td>
                    <h1>Ducimus debitis eius.</h1>
                  </td>
                </tr>
                <tr>
                  <td>h2</td>
                  <td>
                    <h2>Harum velit cupiditate.</h2>
                  </td>
                </tr>
                <tr>
                  <td>h3</td>
                  <td>
                    <h3>Libero et doloremque nostrum est.</h3>
                  </td>
                </tr>
                <tr>
                  <td>h4</td>
                  <td>
                    <h4>Odit temporibus architecto.</h4>
                  </td>
                </tr>
                <tr>
                  <td>h5</td>
                  <td>
                    <h5>Perspiciatis est rerum dolore.</h5>
                  </td>
                </tr>
                <tr>
                  <td>h6</td>
                  <td>
                    <h6>Temporibus sint facere repudiandae.</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Widget>
      <Widget
        title="Display classes"
        description="Use larger, slightly more opinionated heading styles adding the <code>.display-1-4</code> classes">
        <div className="row">
          <div className="col">
            <table className="table table-unbordered">
              <tbody>
                <tr>
                  <td>display-1</td>
                  <td>
                    <h1 className="display-1">Hello world!</h1>
                  </td>
                </tr>
                <tr>
                  <td>display-2</td>
                  <td>
                    <h1 className="display-2">Hello world!</h1>
                  </td>
                </tr>
                <tr>
                  <td>display-3</td>
                  <td>
                    <h1 className="display-3">Hello world!</h1>
                  </td>
                </tr>
                <tr>
                  <td>display-4</td>
                  <td>
                    <h1 className="display-4">Hello world!</h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Widget>
      <Widget title="Body copy" description="Default styling for paragraphs">
        <div className="row">
          <div className="col">
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Donec
              ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </div>
      </Widget>
      <Widget
        title="Lead"
        description="Make a paragraph stand out by adding <code>.lead</code> className">
        <div className="row">
          <div className="col">
            <p className="lead">
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus.
            </p>
          </div>
        </div>
      </Widget>
      <Widget
        title="Blockquotes"
        description="For quoting blocks of content from another source within your document">
        <div className="row">
          <div className="col">
            <blockquote className="blockquote">
              <p className="m-b-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <blockquote className="blockquote blockquote-reverse">
              <p className="m-b-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </Widget>
      {Object.keys(colors).map((color, i) => (
        <Widget
          title={`Coloured blockquotes using ${color} colors`}
          description={`Add the <code>.blockquote-${color}</code> className for blockquotes with ${color} colors`}
          key={i}>
          <div className="row">
            <div className="col">
              <blockquote className={`blockquote blockquote-${color}`}>
                <p className="m-b-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="col">
              <blockquote
                className={`blockquote blockquote-reverse blockquote-${color}`}>
                <p className="m-b-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </Widget>
      ))}
      <Widget
        title="Inline text elements"
        description="Styling for common inline HTML5 elements">
        <div className="row">
          <div className="col">
            <p>
              You can use the mark badge to
              <mark>highlight</mark>text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <abbr title="attribute">attr</abbr>
            </p>
            <p>
              <abbr title="HyperText Markup Language" className="initialism">
                HTML
              </abbr>
            </p>
          </div>
        </div>
      </Widget>
      <Widget
        title="Lists"
        description="Remove the default list styling and left margin on list items">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="color-grey-700 text-sm m-b-10">
              Remove a list's bullets and apply some light margin with a
              combination of two classes,
              <code>.list-inline</code>
              and
              <code>.list-inline-item</code>
              .
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="color-grey-700 text-sm m-b-10">
              Align terms and descriptions horizontally by using bootstrap's
              grid systems predefined classNames or semantic mixins.
            </p>
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>
              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                Vestibulum id ligula porta felis euismod semper eget lacinia
                odio sem nec elit.
              </dd>
              <dd className="col-sm-9 offset-sm-3">
                Donec id elit non mi porta gravida at eget metus.
              </dd>
              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>
              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>
              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </div>
      </Widget>
    </div>
  </div>
)
const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Typography)
