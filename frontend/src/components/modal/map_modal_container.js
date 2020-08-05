import { connect } from 'react-redux';

import MapModal from './map_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
    return {
        ...state
    }
}

const mdtp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    msp,
    mdtp
)(MapModal);