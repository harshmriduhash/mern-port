import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import VisitorModal from './visitor_modal';

const msp = state => {
    return {
        data: null
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(
    msp, 
    mdtp
)(VisitorModal);