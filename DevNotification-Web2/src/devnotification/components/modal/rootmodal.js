// These are regular React components we will write soon
import CreateProjectModal from '../../projects/createprojectmodal'
import LinkProjectModal from '../../projects/linkprojectmodal'

import { connect } from 'react-redux';
import React, { Component } from 'react';

import BaseCrudModal from './basecrudmodal'

const MODAL_COMPONENTS = {
    'CREATE_PROJECT': CreateProjectModal,
    'LINK_PROJECT': LinkProjectModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return null;
    }

    const SpecificModalBody = MODAL_COMPONENTS[modalType]
    return (
        <BaseCrudModal {...modalProps}>
            <SpecificModalBody {...modalProps} />
        </BaseCrudModal>
    )


    return
}

export default connect(
    state => state.modal
)(ModalRoot)