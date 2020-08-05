const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateBlogInput(blogData) {
    const errors = {};
    const data = { ...blogData };

    data.body = validText(data.description) ? data.description : '';
    data.title = validText(data.title) ? data.title : '';
    data.quote = validText(data.quote) ? data.quote : '';
    data.authorQuote = validText(data.authorQuote) ? data.authorQuote : '';

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description field must be filled';
    };

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field must be filled';
    };

    if (Validator.isEmpty(data.quote)) {
        errors.quote = 'Quote field must be filled';
    };

    if (Validator.isEmpty(data.authorQuote)) {
        errors.authorQuote = 'Author Quote field must be filled';
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};