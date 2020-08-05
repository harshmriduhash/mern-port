import { CREATE_CONTACT } from '../actions/contact_actions';

const ContactsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case CREATE_CONTACT: 
            nextState['message'] = 'success';
            return nextState;
        default:
            return nextState;
    };
};

export default ContactsReducer;