const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateVisitorInput(visitorData) {
    const errors = {};
    const data = { ...visitorData };

    data.visitorType = validText(data.visitorType) ? data.visitorType : '';

    if(Validator.isEmpty(data.visitorType)) {
        errors.visitorType = 'Visitor field must be filled';
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};