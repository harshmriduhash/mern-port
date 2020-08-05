import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

import Navbar from './navbar'

const msp = state => {
    const { session } = state;
    return {
        session,
    };
};

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    msp,
    mdtp
)(Navbar);