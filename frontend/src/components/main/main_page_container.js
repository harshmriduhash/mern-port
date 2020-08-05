import { connect } from 'react-redux';

import Main from './main_page';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(
    msp, 
    mdtp
)(Main);