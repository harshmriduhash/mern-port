const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateContactInput(contactData) {
    const errors = {};
    const data = { ...contactData };

    data.body = validText(data.message) ? data.message : '';
    data.title = validText(data.title) ? data.title : '';
    data.email = validText(data.email) ? data.email : '';
    
    if (Validator.isEmpty(data.message)) {
        errors.message = 'Message field must be filled';
    };

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field must be filled';
    };

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field must be filled';
    };

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};