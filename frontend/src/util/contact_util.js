import axios from 'axios';

export const createContact = contactData => {
    return axios.post('/api/contacts/contact', contactData);
};