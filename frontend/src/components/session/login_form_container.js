import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = state => {
    const { errors } = state;
    return {
        errors: errors.session
    };
};

const mdtp = dispatch => {
    return {
        login: user => dispatch(login(user))
    };
};

export default connect(
    msp, 
    mdtp
)(LoginForm);