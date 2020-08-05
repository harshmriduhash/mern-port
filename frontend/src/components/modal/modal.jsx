import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import MapModalContainer from './map_modal_container';
import VisitorModalContainer from './visitor_modal_container';

const Modal = (props) => {
    const { modal, closeModal } = props;

    if(!modal) {
        return null;
    }

    let component;
    let childClass;
    
    switch(modal.modal) {
        case 'welcome-visitor':
            component = <VisitorModalContainer />;
            childClass = 'modal-child-visitor';
            break;
        case 'map-modal':
            component = <MapModalContainer route={modal.route} />;
            childClass = 'modal-child-map';
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className={childClass} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const msp = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(
    msp,
    mdtp
)(Modal);