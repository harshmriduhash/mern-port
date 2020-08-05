const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLocationInput(locationData) {
    const errors = {};
    const data = { ...locationData };

    data.location = validText(data.location) ? data.location : '';

    if (Validator.isEmpty(data.location)) {
        errors.location = 'Location field must be filled';
    };

    if (/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/.test(data.location) === false) {
        errors.locationFormat = 'Location is formatted invalid';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
