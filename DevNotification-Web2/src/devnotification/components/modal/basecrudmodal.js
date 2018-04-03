// import Modal from 'react-modal';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class BaseCrudModal extends Component {


    constructor() {
        super();
        this.state = {
            size: 'default'
        }
    }

    hide() {
        this.props.dispatch({ type: "HIDE_MODAL" })
    }


    render() {

        let that = this;

        return (
            <div>
                <Modal
                    isOpen={true}
                    toggle={this.hide.bind(that)}
                    wrapClassName={this.state.className}
                    size={this.state.size}>
                    <ModalHeader toggle={this.hide.bind(that)}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={this.hide.bind(that)}>
                            Save
                    </button>
                        <button className="btn btn-secondary" onClick={this.hide.bind(that)}>
                            Cancel
                    </button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }


};

export default connect()(BaseCrudModal);



