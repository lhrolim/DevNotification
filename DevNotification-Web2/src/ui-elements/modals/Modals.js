import React, {Component} from 'react'
import {connect} from 'react-redux'
import Widget from '../../elements/Widget'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import '../../css/ui-elements/modals.css'

class Modals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      className: 'modal-default',
      size: 'default'
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(e, className, size) {
    this.setState({
      modal: !this.state.modal,
      className: className,
      size: size
    })
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          wrapClassName={this.state.className}
          size={this.state.size}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={this.toggle}>
              Do Something
            </button>
            <button className="btn btn-secondary" onClick={this.toggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
        {Object.keys(this.props.colors).map((color, i) => (
          <div className="row" key={i}>
            <div className="col">
              <Widget
                title={`Modal with ${color} colors`}
                description={`Use the <code>.modal-${color}</code> className for ${color} modals`}>
                <div className="row">
                  <div className="col">
                    <button
                      className={`m-r-10 btn btn-${color}`}
                      onClick={(e, className, size) =>
                        this.toggle(e, `modal-${color}`, 'sm')}>
                      Small modal
                    </button>
                    <button
                      className={`m-r-10 btn btn-${color}`}
                      onClick={(e, className, size) =>
                        this.toggle(e, `modal-${color}`, 'default')}>
                      Default modal
                    </button>
                    <button
                      className={`btn btn-${color}`}
                      onClick={(e, className, size) =>
                        this.toggle(e, `modal-${color}`, 'lg')}>
                      Large modal
                    </button>
                  </div>
                </div>
              </Widget>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    colors: state.colors
  }
}
export default connect(mapStateToProps)(Modals)
