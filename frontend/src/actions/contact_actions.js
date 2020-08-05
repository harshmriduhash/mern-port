import * as APIUTIL from '../util/contact_util';

export const CREATE_CONTACT = 'CREATE_CONTACT';
export const RECEIVE_CONTACT_ERRORS = 'RECEIVE_BLOG_ERRORS';

const receiveNewContact = data => {
    return {
        type: CREATE_CONTACT,
        data
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_CONTACT_ERRORS,
        errors
    };
};

export const createNewContact = data => dispatch => {
    return APIUTIL.createContact(data)
        .then(contact => dispatch(receiveNewContact(contact)))
        .catch(err => dispatch(receiveErrors(err)))
};