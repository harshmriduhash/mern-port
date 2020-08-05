import { connect } from 'react-redux';

import { createNewContact } from '../../actions/contact_actions';
import Contact from './contact';

const msp = state => {
    return {
        
    };
};

const mdtp = dispatch => {
    return {
        createContact: data => dispatch(createNewContact(data))
    };
};

export default connect(
    msp,
    mdtp
)(Contact);